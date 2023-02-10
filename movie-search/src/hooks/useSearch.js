import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Search field is empty')
      return
    }

    if (search.length < 3) {
      setError('Search query is too short - should be 3 characters or more.')
      return
    }

    if (!search.match(/^[a-zA-Z0-9 ]*$/)) {
      setError('Search query should only contain Latin letters and numbers.')
      return
    }

    setError('')
  }, [search])

  return { search, setSearch, error }
}
