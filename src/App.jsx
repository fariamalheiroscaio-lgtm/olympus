import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MythologyCard from './components/MythologyCard'
import CharacterDetails from './components/CharacterDetails'
import Footer from './components/Footer'
import { getCharacters } from './api/greekApi'

function getCharacterId(character) {
  return `${character.category}-${character.name}`
}

function normalizeCategory(category) {
  if (!category) {
    return ''
  }

  const value = category
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const categories = {
    gods: 'gods',
    deus: 'gods',
    deuses: 'gods',

    heroes: 'heroes',
    hero: 'heroes',
    heroi: 'heroes',
    herois: 'heroes',

    monsters: 'monsters',
    monster: 'monsters',
    monstro: 'monsters',
    monstros: 'monsters',

    titans: 'titans',
    titan: 'titans',
    titas: 'titans',
    titã: 'titans',
  }

  return categories[value] || value
}

function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selectedCharacter, setSelectedCharacter] =
    useState(null)

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved =
        localStorage.getItem('olympos-favorites')

      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [showFavorites, setShowFavorites] =
    useState(false)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadCharacters() {
      try {
        setLoading(true)
        setError('')

        const data = await getCharacters()

        setCharacters(data)
      } catch (error) {
        console.error(error)

        setError(
          'Não foi possível carregar os dados da API.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        'olympos-favorites',
        JSON.stringify(favorites)
      )
    } catch (error) {
      console.error(
        'Não foi possível salvar favoritos.',
        error
      )
    }
  }, [favorites])

  function toggleFavorite(character) {
    const id = getCharacterId(character)

    setFavorites((currentFavorites) => {
      const alreadyFavorite =
        currentFavorites.some(
          (favorite) =>
            getCharacterId(favorite) === id
        )

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) =>
            getCharacterId(favorite) !== id
        )
      }

      return [...currentFavorites, character]
    })
  }

  function isFavorite(character) {
    return favorites.some(
      (favorite) =>
        getCharacterId(favorite) ===
        getCharacterId(character)
    )
  }

  const filteredCharacters = useMemo(() => {
    const source = showFavorites
      ? favorites
      : characters

    return source.filter((character) => {
      const name = character.name || ''

      const matchesSearch = name
        .toLowerCase()
        .includes(search.toLowerCase())

      const characterCategory =
        normalizeCategory(character.category)

      const matchesCategory =
        category === 'all' ||
        characterCategory === category

      return (
        matchesSearch &&
        matchesCategory
      )
    })
  }, [
    characters,
    favorites,
    search,
    category,
    showFavorites,
  ])

  function handleShowFavorites() {
    setShowFavorites((current) => !current)
    setSearch('')
    setCategory('all')
  }

  return (
    <div className="app">
      <Header />

      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="filters">
          <button
            className={
              category === 'all' &&
              !showFavorites
                ? 'active'
                : ''
            }
            onClick={() => {
              setCategory('all')
              setShowFavorites(false)
            }}
          >
            Todos
          </button>

          <button
            className={
              category === 'gods' &&
              !showFavorites
                ? 'active'
                : ''
            }
            onClick={() => {
              setCategory('gods')
              setShowFavorites(false)
            }}
          >
            Deuses
          </button>

          <button
            className={
              category === 'heroes' &&
              !showFavorites
                ? 'active'
                : ''
            }
            onClick={() => {
              setCategory('heroes')
              setShowFavorites(false)
            }}
          >
            Heróis
          </button>

          <button
            className={
              category === 'monsters' &&
              !showFavorites
                ? 'active'
                : ''
            }
            onClick={() => {
              setCategory('monsters')
              setShowFavorites(false)
            }}
          >
            Monstros
          </button>

          <button
            className={
              category === 'titans' &&
              !showFavorites
                ? 'active'
                : ''
            }
            onClick={() => {
              setCategory('titans')
              setShowFavorites(false)
            }}
          >
            Titãs
          </button>

          <button
            className={`favorites-filter ${
              showFavorites ? 'active' : ''
            }`}
            onClick={handleShowFavorites}
          >
            ⭐ Favoritos ({favorites.length})
          </button>
        </div>

        {!loading && !error && (
          <div className="results-info">
            <h2>
              {showFavorites
                ? 'Personagens favoritos'
                : 'Personagens da mitologia grega'}
            </h2>

            <p>
              {showFavorites
                ? 'Personagens que você salvou como favoritos.'
                : 'Explore deuses, heróis, monstros e titãs da mitologia grega.'}
            </p>
          </div>
        )}

        {loading && (
          <div className="status">
            <div className="loading-spinner"></div>

            <p>
              Carregando personagens da mitologia grega...
            </p>
          </div>
        )}

        {error && (
          <div className="status error">
            <h2>⚠️ Ocorreu um problema</h2>

            <p>{error}</p>

            <button
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!loading &&
          !error &&
          filteredCharacters.length === 0 && (
            <div className="status">
              <h2>
                {showFavorites
                  ? '⭐ Nenhum favorito'
                  : '🔎 Nenhum resultado'}
              </h2>

              <p>
                {showFavorites
                  ? 'Clique na estrela de um personagem para adicioná-lo aos favoritos.'
                  : 'Tente pesquisar outro nome ou escolher outra categoria.'}
              </p>
            </div>
          )}

        {!loading &&
          !error &&
          filteredCharacters.length > 0 && (
            <section className="cards">
              {filteredCharacters.map(
                (character, index) => (
                  <div
                    className="card-wrapper"
                    key={`${getCharacterId(
                      character
                    )}-${index}`}
                  >
                    <button
                      className={`favorite-button ${
                        isFavorite(character)
                          ? 'favorite-active'
                          : ''
                      }`}
                      onClick={(event) => {
                        event.stopPropagation()

                        toggleFavorite(character)
                      }}
                      aria-label={
                        isFavorite(character)
                          ? 'Remover dos favoritos'
                          : 'Adicionar aos favoritos'
                      }
                    >
                      {isFavorite(character)
                        ? '★'
                        : '☆'}
                    </button>

                    <div
                      onClick={() =>
                        setSelectedCharacter(
                          character
                        )
                      }
                    >
                      <MythologyCard
                        character={character}
                      />
                    </div>
                  </div>
                )
              )}
            </section>
          )}
      </main>

      <CharacterDetails
        character={selectedCharacter}
        onClose={() =>
          setSelectedCharacter(null)
        }
        isFavorite={
          selectedCharacter
            ? isFavorite(selectedCharacter)
            : false
        }
        onToggleFavorite={toggleFavorite}
      />

      <Footer />
    </div>
  )
}

export default App