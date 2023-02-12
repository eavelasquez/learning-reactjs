import { Helmet } from 'react-helmet'

import '../styles/containers/NotFound.css'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found - Platzi Conf Merch</title>
      </Helmet>

      <div className='NotFound'>
        <h1>404: Not Found</h1>
      </div>
    </>
  )
}
