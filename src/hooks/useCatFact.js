import { useEffect, useState } from 'react'

import { getRandomFact } from '../services/cat-facts'

// useCatFact is a custom hook that returns a random fact
export function useCatFact() {
    const [fact, setFact] = useState('')

    // This function is used to fetch a random fact
    const refreshRandomFact = () => {
        getRandomFact().then((fact) => setFact(fact))
    }

    useEffect(refreshRandomFact, [])

    return { fact, refreshRandomFact }
}
