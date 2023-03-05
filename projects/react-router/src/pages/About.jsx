import { navigate } from '../App'

export default function AboutPage () {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1580945539700506627/lb7Kxuu4_400x400.jpg' alt='eavelasquez73 photo' />
        <p>Hi! My name is Alexander and I'm creating this clone of React Router</p>
      </div>
      <button onClick={() => navigate('/')}>Go to home page</button>
    </>
  )
}
