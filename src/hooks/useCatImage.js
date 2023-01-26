import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says'

// useCatImage is a custom hook that returns a random image using the first three words of the fact
export function useCatImage({ fact }) {
  const [image, setImage] = useState('')

  // This useEffect is used to fetch a random image using the first three words of the fact
  useEffect(() => {
    if (!fact) return

    const firstWordOfFact = fact.split(' ', 3).join(' ')
    const encodedWord = encodeURIComponent(firstWordOfFact)

    fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}/${encodedWord}`)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        setImage(url)
      })
      .catch((err) => console.error(err))
  }, [fact])

  return { image }
}
