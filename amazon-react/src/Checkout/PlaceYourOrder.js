import React from 'react'

const PlaceYourOrder = () => {
  return (
    <div className='place-your-order-container'>
        <button className='place-order-buttons'>Place Your Order</button>
        <div className='total-price-container'>
        <p className='total-order-cost'>Order Total:</p> <p className='total-costs'> ₹239.00</p>
        </div>
    </div>
  )
}

export default PlaceYourOrder