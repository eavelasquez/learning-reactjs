const CHARACTERS_ENDPOINT = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async () => {
  const response = await fetch(CHARACTERS_ENDPOINT)
  const { results } = await response.json()
  return results
}
