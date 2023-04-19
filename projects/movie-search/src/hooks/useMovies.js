import { useCallback, useMemo, useRef, useState } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // This is a way to store a value that will persist between renders
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
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
  }, [])

  const getSortedMovies = useMemo(() => (
    sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  ), [movies, sort])

  return { movies: getSortedMovies, loading, getMoviesError: error, getMovies }
}
