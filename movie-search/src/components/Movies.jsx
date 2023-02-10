function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(({ id, title, year, poster }) => (
          <li className='movie' key={id}>
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} alt={title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies ({ error }) {
  return error && <p className='error'>{error}</p>
}

export function Movies ({ movies, error }) {
  return movies?.length > 0
    ? <ListOfMovies movies={movies} />
    : <NoMovies error={error} />
}
