import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const route = useNavigate()
  const eco = "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp"
   const thumbnail =  "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp"
  return (
    <div>
      <div className='p-10  '>
        <h1 className='text-3xl font-mono rounded-4xl max-w-xl pl-3 shadow shadow-gray-300 '>Welcome to Shoply Store</h1>
        <div className=' p-10  h-96 rounded-2xl mt-3.5 text-md  shadow-xl flex items-center justify-between backdrop-blur-sm'>
          <div className='text-xl'>
          <h1>this is where you can get the best deals</h1>
          <p>Check out our latest offers and discounts!</p>
          <h1 className='text-5xl font-bold text-green-900'>50% OFF</h1>
          <button className='bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-800 mt-10' onClick={()=>(route('/products'))}>Shop Now</button>
        </div>
          { 
          //this is right side of the home page where we will show the thumbnail of the product
          }

        <div className='relative  w-1/2 flex'>
          <div>
            <img src={thumbnail} alt="" className='shadow'/>
          </div>
          <div>
            <img src={eco} alt="" className=' rotate-45 bg-none absolute '/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
