import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../util/counterStore'
import Checkout from '../components/Checkout'

const Cart = () => {
  const cart = useCart((state)=> state.cart)
  const removeFromCart = useCart((state)=> state.removeFromCart)
  const getTotalPrice = useCart((state)=> state.getTotalPrice)
  const increase = useCart((state)=> state.increase)
  const decrease = useCart((state)=> state.decrease)
  const clearCart = useCart((state)=> state.clearCart)
  const back = useNavigate()
  const eco = "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp"

  
  return (
  <div >
         <button className="capitalize px-5 py-1 rounded shadow border-2 border-pink-600/70 shadow-gray-200/60 cursor-pointer m-4 border-dashed"
         onClick={()=>(back(-1))}
         >countinou shoping</button>
      <div className='flex justify-between max-w-6xl mx-auto gap-3'>
        {/*left*/}
        
      <div className=' w-1/2 h-96'>
        <div className=' capitalize flex justify-between mx-4 border-b p-3 text-gray-800 '>
          <h1>product</h1>
          <h1>quantity</h1>
          <h1>price</h1>
          <h1></h1>
         
        </div>
         <div className=' flex flex-col '>
         
          {
            cart.length === 0 ? <h1 className='mt-30 text-center font-black uppercase text-2xl text-gray-900/90'>your cart is empty please add product</h1>
            :
            cart?.map((item)=>(
            
            <div className=' flex justify-between mx-4 items-center font-bold' key={item.id}>
          <img src={item.thumbnail} alt="" className='w-28 h-28'/>
         <div className='flex items-center gap-5 border rounded'>
          <button className='p-2 hover:bg-gray-300/70 rounded '
           onClick={()=>(decrease(item.id))}
          >-</button>
          <h1>{item.qty}</h1>
          <button className='p-2 hover:bg-gray-300/70 rounded '
          onClick={()=>(increase(item.id))}
          >+</button>
         </div>
         <h1>{item.price.toFixed()}</h1>
         <button onClick={()=>(removeFromCart(item.id))}>remove</button>
         </div>
          ))} 

         {cart.length > 0 && <button className='capitalize font-bold border max-w-60 py-1 mx-auto px-10 hover:bg-gray-300/70 rounded mt-15'
          onClick={()=>(
            clearCart()
          )}
          >clear cart</button>}
        </div>

      </div>
        {/*right*/}
      <Checkout/>
    </div>
    </div>
  )
}

export default Cart


/*


          <img src={eco} alt="" className='w-28 h-28'/>
         <h1>$30</h1>
         <div className='flex items-center gap-5 border rounded'>
          <button className='p-2 hover:bg-gray-300/70 rounded '>-</button>
          <h1>0</h1>
          <button className='p-2 hover:bg-gray-300/70 rounded '>+</button>
         </div>
         <h1>$30</h1>

         */