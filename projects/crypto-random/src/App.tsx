import { useState } from 'react'

import './App.css'

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const text = await response.text()
  return parseInt(text)
}

export const App = () => {
  const [random, setRandom] = useState<number>(0)

  return (
    <div className="App App-header">
      <h1>Crypto Random</h1>
      <p>Random number: {random}</p>
      <button onClick={async () => setRandom(await getRandomNumber())}>Get Random Number</button>
    </div>
  )
}
