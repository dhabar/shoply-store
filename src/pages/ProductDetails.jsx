import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
  const [product, setProduct] = useState(null)
  const [active, setActive] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        )
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching product details:', error)
      }
    }

    fetchProductDetails()
  }, [id])

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActive(product.images[0])
    }
  }, [product])

  if (!product) {
    return <div>loading...</div>
  }

  return (
    <div>
      <button
        className='shadow-xl px-8 py-2 rounded bg-pink-600/70 m-6'
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className='flex max-w-6xl mx-auto gap-6 mt-15'>
        {/* left side */}
        <div className='w-1/2 justify-center items-center flex flex-col '>
          <div className='rounded shadow shadow-gray-300 '>
            <img className='h-96' src={active || product.thumbnail} alt={product.title} />
          </div>

          <div className='border my-30 ml-20 flex gap-2 min-w-96 h-56 rounded shadow shadow-gray-300 p-4 border-gray-200 overflow-x-auto'>
            {product?.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.title}
                onClick={() => setActive(img)}
              />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className='w-1/2'>
          <h1 className='text-xl'>{product.description}</h1>

          <div className='flex justify-between my-6'>
            <h1 className='text-xl text-pink-600'>${product.price}</h1>
            <h1 className='text-xl text-gray-400 capitalize'>
              {product.stock} in stock
            </h1>
          </div>

          <button className='shadow-xl px-8 py-2 rounded bg-pink-600/70'>
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails