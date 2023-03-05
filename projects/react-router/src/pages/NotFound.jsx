import { Link } from '../components'

export default function NotFoundPage () {
  return (
    <>
      <h1>Not Found - 404</h1>
      <div>
        <p>Sorry, the page you are looking for does not exist.</p>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='404 gif' />
      </div>
      <Link to='/'>Go to home page</Link>
    </>
  )
}
