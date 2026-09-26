const API_URL = 'https://thegreekmythapi.vercel.app/api'
const API_ORIGIN = 'https://thegreekmythapi.vercel.app'

function getImageUrl(image) {
  if (!image) {
    return null
  }

  // Imagem que já possui endereço completo
  if (image.startsWith('http')) {
    return image
  }

  // Caminhos que começam com /images/
  if (image.startsWith('/images/')) {
    return `${API_ORIGIN}${image}`
  }

  // Caminhos que já começam com /api/
  if (image.startsWith('/api/')) {
    return `${API_ORIGIN}${image}`
  }

  // Qualquer outro caminho começando com /
  if (image.startsWith('/')) {
    return `${API_ORIGIN}${image}`
  }

  // Caso venha apenas o nome do arquivo
  return `${API_ORIGIN}/api/${image}`
}

async function fetchCategory(endpoint, category) {
  try {
    const response = await fetch(
      `${API_URL}/${endpoint}`
    )

    if (!response.ok) {
      console.warn(
        `Não foi possível carregar ${category}.`
      )

      return []
    }

    const data = await response.json()

    const characters = Array.isArray(data)
      ? data
      : data.data || data.results || []

    if (!Array.isArray(characters)) {
      return []
    }

    return characters.map((character) => ({
      ...character,
      category,
      image: getImageUrl(character.image),
    }))
  } catch (error) {
    console.warn(
      `Erro ao carregar ${category}:`,
      error
    )

    return []
  }
}

export async function getCharacters() {
  const results = await Promise.all([
    fetchCategory('gods', 'gods'),
    fetchCategory('heroes', 'heroes'),
    fetchCategory('monsters', 'monsters'),
    fetchCategory('titans', 'titans'),
  ])

  const characters = results.flat()

  if (characters.length === 0) {
    throw new Error(
      'Nenhum dado foi carregado da API.'
    )
  }

  return characters
}