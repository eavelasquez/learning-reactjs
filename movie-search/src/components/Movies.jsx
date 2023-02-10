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
