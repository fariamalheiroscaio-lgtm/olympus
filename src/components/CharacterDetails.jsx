import { getStorySummary } from '../api/storySummaries'
import { getTranslation } from '../api/translations'

function formatList(value) {
  if (!value) {
    return null
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  return value
}

function CharacterDetails({ character, onClose }) {
  if (!character) {
    return null
  }

  const categoryNames = {
    gods: 'Deus',
    heroes: 'Herói',
    monsters: 'Monstro',
    titans: 'Titã',
  }

  const categoryName =
    categoryNames[character.category] ||
    character.category ||
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

  const attributes = character.attributes || {}
  const family = attributes.family || {}

  const stories = Array.isArray(attributes.stories)
    ? attributes.stories
    : []

  const displayOrigin =
    translation?.origin ||
    attributes.origin

  const displayPowers =
    translation?.powers ||
    attributes.powers

  const displaySymbols =
    translation?.symbols ||
    attributes.symbols

  const displayAbode =
    translation?.abode ||
    attributes.abode

  return (
    <div
      className="details-overlay"
      onClick={onClose}
    >
      <div
        className="details"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          ✕
        </button>

        {character.image ? (
          <img
            className="details-image"
            src={character.image}
            alt={`Imagem de ${displayName}`}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        ) : null}

        <span className="category">
          {categoryName}
        </span>

        <h2>{displayName}</h2>

        {displayDescription && (
          <section className="detail-section">
            <h3>📖 Descrição</h3>
            <p>{displayDescription}</p>
          </section>
        )}

        {displayOrigin && (
          <section className="detail-section">
            <h3>🏺 Origem</h3>
            <p>{displayOrigin}</p>
          </section>
        )}

        {displayPowers && (
          <section className="detail-section">
            <h3>⚡ Poderes e características</h3>
            <p>{formatList(displayPowers)}</p>
          </section>
        )}

        {displaySymbols && (
          <section className="detail-section">
            <h3>🔱 Símbolos</h3>
            <p>{formatList(displaySymbols)}</p>
          </section>
        )}

        {displayAbode && (
          <section className="detail-section">
            <h3>🏛️ Moradia</h3>
            <p>{displayAbode}</p>
          </section>
        )}

        {stories.length > 0 && (
          <section className="detail-section">
            <h3>📜 Histórias e fatos marcantes</h3>

            <div className="stories-list">
              {stories.map((story, index) => (
                <article
                  className="story-item"
                  key={`${story}-${index}`}
                >
                  <h4>{story}</h4>

                  <p>
                    {getStorySummary(
                      character.name,
                      story
                    )}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {(family.parents ||
          family.siblings ||
          family.spouse) && (
          <section className="detail-section">
            <h3>👨‍👩‍👧 Família</h3>

            {family.parents && (
              <p>
                <strong>Pais:</strong>{' '}
                {formatList(family.parents)}
              </p>
            )}

            {family.siblings && (
              <p>
                <strong>Irmãos:</strong>{' '}
                {formatList(family.siblings)}
              </p>
            )}

            {family.spouse && (
              <p>
                <strong>Cônjuge:</strong>{' '}
                {formatList(family.spouse)}
              </p>
            )}
          </section>
        )}

        <button
          className="details-close-bottom"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default CharacterDetails