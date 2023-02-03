import '../styles/containers/Success.css'

export const Success = () => {
  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>NAME, THANKS FOR YOUR PURCHASE</h2>
        <span>Your order will arrive in 3 business days at your address:</span>
        <div className='Success-map'>Google Maps</div>
      </div>
    </div>
  )
}
