import { useEffect } from "react"
import { useFetch } from "../../util/fetch"
import { Link } from "react-router-dom"


const Products = () => {
  const fetchProducts = useFetch((state)=>state.fetchProducts)
  const Data = useFetch((state)=>state.Data)

  useEffect(()=>{
    fetchProducts()
  },[])

  return (

    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto "> 
      {Data.products?.map((product)=>(
        <Link to={`/products/product-details/${product.id}`} className="shadow hover:shadow-lg p-4 rounded hover:scale-102 transition transform" key={product.id} >
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Products
