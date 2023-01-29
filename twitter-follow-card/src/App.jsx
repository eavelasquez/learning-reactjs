import './App.css'

import { TwitterFollowCard } from './components/TwitterFollowCard'
import { users } from './utils/constants'

function App () {
  return (
    <section className='App'>
      <h1>Twitter Follow Card</h1>
      {
        users.map(({ username, name, isFollowing }) => (
          <TwitterFollowCard
            key={username}
            username={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
