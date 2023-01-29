import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

function App () {
  return (
    <section className='App'>
      <h1>Twitter Follow Card</h1>

      <TwitterFollowCard username='eavelasquez' name='Esteban Velasquez' isFollowing />
      <TwitterFollowCard username='nasa' name='NASA' isFollowing={false} />
      <TwitterFollowCard username='midudev' name='Miguel Ángel Durán' isFollowing />
      <TwitterFollowCard username='goodreads' name='Goodreads' isFollowing={false} />
    </section>
  )
}

export default App
