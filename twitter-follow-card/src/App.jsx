import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  return (
    <section className='App'>
      <h1>Twitter Follow Card</h1>

      <TwitterFollowCard username='eavelasquez' name='Esteban Velasquez' />
      <TwitterFollowCard username='nasa' name='NASA' />
      <TwitterFollowCard username='midudev' name='Miguel Ángel Durán' />
    </section>
  )
}

export default App
