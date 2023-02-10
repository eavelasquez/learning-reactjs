const OMDB_API_URL = 'https://www.omdbapi.com'
const { VITE_OMDB_API_KEY: OMDB_API_KEY } = import.meta.env

export const searchMovies = async ({ search }) => {
  if (!search) return []

  try {
    const response = await fetch(`${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&s=${search}`)
    const data = await response.json()

    if (data.Response === 'False') {
      throw new Error('No movies found')
    }

    const { Search: movies } = data

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Something went wrong')
    }

    throw new Error(error.message)
  }
}
