import { useEffect, useState } from 'react'

import { getRandomImage } from '../services/cat-images'

// useCatImage is a custom hook that returns a random image using the first three words of the fact
export function useCatImage ({ fact }) {
  const [image, setImage] = useState('')

  // This useEffect is used to fetch a random image using the first three words of the fact
  useEffect(() => {
    if (!fact) return

    const firstWordOfFact = fact.split(' ', 3).join(' ')
    const encodedWord = encodeURIComponent(firstWordOfFact)

    getRandomImage(encodedWord).then((image) => setImage(image))
  }, [fact])

  return { image }
}
