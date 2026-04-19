import React from 'react'

const Cart = () => {
  const eco = "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp"

  return (
  <div >
         <button className="capitalize px-5 py-1 rounded shadow border-2 border-pink-600/70 shadow-gray-200/60 cursor-pointer m-4 border-dashed">countinou shoping</button>
      <div className='flex justify-between max-w-6xl mx-auto gap-3'>
        {/*left*/}
      <div className=' w-1/2 h-96'>
        <div className=' capitalize flex justify-between mx-4 border-b p-3 text-gray-800'>
          <h1>product</h1>
          <h1>price</h1>
          <h1>quantity</h1>
          <h1>total</h1>
         
        </div>
         <div className='flex justify-between mx-4 items-center font-bold'>
          <img src={eco} alt="" className='w-28 h-28'/>
         <h1>$30</h1>
         <div className='flex items-center gap-2 border'>
          <button className='p-2 '>-</button>
          <h1>0</h1>
          <button className='p-2 '>+</button>
         </div>
         <h1>$30</h1>
        </div>

      </div>
        {/*right*/}
      <div className='flex justify-center items-center w-1/2 h-96'>
  <div className='w-96 bg-white rounded-xl shadow-md p-6'>

    <h1 className='text-xl font-bold mb-5 text-center'>Order Summary</h1>

    <div className='space-y-3 text-gray-700'>

      <div className='flex justify-between'>
        <span>Subtotal</span>
        <span>$30</span>
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
        <span>$32</span>
      </div>

    </div>

    <button className='w-full mt-6 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition'>
      Checkout
    </button>

  </div>
</div>

    </div>
    </div>
  )
}

export default Cart
