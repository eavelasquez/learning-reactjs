import { useContext } from 'react'

import '../styles/containers/Success.css'
import { AppContext } from '../context/AppContext'
import { Map } from '../components/Map'

export const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer[0].name}, thanks for your purchase`}</h2>
        <span>Your order will arrive in 3 business days at your address:</span>
        <div className='Success-map'>
          <Map />
        </div>
      </div>
    </div>
  )
}
