import { useMemo, useRef, useState } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (previousSearch.current === search) return
    previousSearch.current = search

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

  const getSortedMovies = useMemo(() => (
    sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  ), [movies, sort])

  return { movies: getSortedMovies, loading, getMoviesError: error, getMovies }
}
