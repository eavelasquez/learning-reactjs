import { useEffect, useState } from "react"

import { getRamdomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState('')

    // This function is used to fetch a random fact
    const refreshRandomFact = () => {
        getRamdomFact().then((fact) => setFact(fact))
    }

    useEffect(refreshRandomFact, [])

    return { fact, refreshRandomFact }
}
