import React from 'react'
import { useCart } from '../../util/counterStore'

const Checkout = () => {
      const getTotalPrice = useCart((state)=> state.getTotalPrice)
      const checkout = useCart((state)=> state.checkout)
      const loading = useCart((state)=> state.loading)
      

    
  return (
    <div>
      <div className='flex justify-center items-center  h-96'>
  <div className='w-96 bg-white rounded-xl shadow-md p-6'>

    <h1 className='text-xl font-bold mb-5 text-center'>Order Summary</h1>

    <div className='space-y-3 text-gray-700'>

      <div className='flex justify-between'>
        <span>Subtotal</span>
        <span>${getTotalPrice().toFixed()}</span>
      </div>

      <div className='flex justify-between'>
        <span>Shipping</span>
        <span className='text-green-600'>Free</span>
      </div>

      <div className='flex justify-between'>
        <span>Tax</span>
        <span>free</span>
      </div>

      <div className='flex justify-between font-bold text-lg border-t pt-3 mt-3'>
        <span>Total</span>
        <span>${getTotalPrice().toFixed()}</span>
      </div>

    </div>

    <button className='w-full mt-6 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition'
    onClick={checkout}
    disabled={loading}
    >
      {loading ? "Processing..." : "Checkout"}
    </button>

  </div>
</div>
    </div>
  )
}

export default Checkout
