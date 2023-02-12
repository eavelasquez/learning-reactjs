import './App.css'
// import { WithoutReactQuery } from './components/WithoutReactQuery'
import { WithReactQuery } from './components/WithReactQuery'

export const App = () => {
  return (
    <div className='App App-header'>
      <h1>Crypto Random</h1>

      {/* <WithoutReactQuery /> */}
      <WithReactQuery />
    </div>
  )
}
