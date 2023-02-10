import { useState } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getMovies = async () => {
    try {
      setLoading(true)
      setError('')
      const movies = await searchMovies({ search })
      setMovies(movies)
    } catch (error) {
      setMovies([])
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, loading, error, getMovies }
}
