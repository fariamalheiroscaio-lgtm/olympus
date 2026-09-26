import { getTranslation } from '../api/translations'

function MythologyCard({ character }) {
  const categoryNames = {
    gods: 'Deus',
    heroes: 'Herói',
    monsters: 'Monstro',
    titans: 'Titã',
  }

  const categoryName =
    categoryNames[character.category] ||
    'Personagem'

  const translation = getTranslation(character)

  const displayName =
    translation?.name ||
    character.name ||
    'Personagem'

  const displayDescription =
    translation?.description ||
    character.description ||
    'Descrição não disponível.'

  return (
    <article className="card">
      <div className="card-image-container">
        {character.image ? (
          <img
            className="card-image"
            loading="lazy"
            src={character.image}
            alt={`Imagem de ${displayName}`}
            onError={(event) => {
              event.currentTarget.style.display = 'none'

              const fallback =
                event.currentTarget.parentElement.querySelector(
                  '.image-fallback'
                )

              if (fallback) {
                fallback.style.display = 'flex'
              }
            }}
          />
        ) : null}

        <div
          className="image-fallback"
          style={{
            display: character.image ? 'none' : 'flex',
          }}
        >
          <div className="fallback-symbol">🏛️</div>

          <strong>{displayName}</strong>

          <small>Personagem de OLYMPOS</small>
        </div>
      </div>

      <div className="card-content">
        <span className="category">
          {categoryName}
        </span>

        <h2>{displayName}</h2>

        <p>{displayDescription}</p>

        <span className="card-action">
          Ver detalhes →
        </span>
      </div>
    </article>
  )
}

export default MythologyCard