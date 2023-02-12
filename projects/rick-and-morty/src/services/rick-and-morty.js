export const getCharacters = async (url) => {
  const response = await fetch(url)
  const { results } = await response.json()
  return results
}
