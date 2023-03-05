import { navigate } from '../components/Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page of the React Router</p>
      <button onClick={() => navigate('/about')}>Go to about page</button>
    </>
  )
}
