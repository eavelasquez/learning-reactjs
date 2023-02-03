import '../styles/containers/Information.css'

export const Information = () => {
  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Contact Information</h2>
        </div>

        <div className='Information-form'>
          <form action=''>
            <input type='text' placeholder='Full Name' name='name' />
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Address' name='address' />
            <input type='text' placeholder='Apt' name='apt' />
            <input type='text' placeholder='City' name='city' />
            <input type='text' placeholder='Country' name='country' />
            <input type='text' placeholder='State' name='state' />
            <input type='text' placeholder='Postal Code' name='postalCode' />
            <input type='text' placeholder='Phone' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>Back</div>
          <div className='Information-next'>Next</div>
        </div>
      </div>

      <div className='Information-sidebar'>
        <h3>Order Summary</h3>

        <div className='Information-item'>
          <div className='Information-element'>
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}
