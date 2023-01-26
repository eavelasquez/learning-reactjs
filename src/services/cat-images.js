const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says'

export const getRandomImage = async (encodedWord) => {
  const res = await fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}/${encodedWord}`)
  const blob = await res.blob()
  const imageUrl = URL.createObjectURL(blob)
  return imageUrl
}
