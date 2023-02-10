import { useState } from 'react'

import withResults from '../mocks/with-results.json'

const { VITE_OMDB_API_KEY: API_KEY } = import.meta.env

export function useMovies () {
  const [movies, setMovies] = useState(withResults.Search)

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const searchMovies = async (query) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  return { movies: mappedMovies, searchMovies }
}
