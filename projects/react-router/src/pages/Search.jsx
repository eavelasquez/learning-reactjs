import { useEffect, useState } from 'react'

export default function SearchPage ({ query }) {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!query) return

    const search = async () => {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`)
      const { items } = await response.json()
      setSearchResults(items)
    }
    search()
  }, [query])

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <p>Search results in <strong>GitHub</strong> for: <pre>{query}</pre></p>
        <ul>
          {searchResults.map((repo) => (
            <li key={repo.id} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  marginBottom: 5,
                  marginRight: 10
                }}
              />
              <a href={repo.html_url} target='_blank' rel='noreferrer'>
                {repo.full_name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
