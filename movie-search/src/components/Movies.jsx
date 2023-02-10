function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies () {
  return (
    <p>No movies found</p>
  )
}

export function Movies ({ movies }) {
  return movies.length > 0
    ? <ListOfMovies movies={movies} />
    : <NoMovies />
}
