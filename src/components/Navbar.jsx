
import { ClipboardDocumentListIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { Link, useNavigate } from 'react-router-dom'
import { SignInButton, UserButton, useUser,  } from "@clerk/react"
import Skeletonbutton from "./Skeleton-button"
import { useCart } from "../../util/counterStore"

const Navbar = () => {
  const cart = useCart((state) => state.cart)
  const getTotalQty = useCart((state) => state.getTotalQty)
  const count = getTotalQty()
  const navigate = useNavigate()
  const { isSignedIn,isLoaded, user } = useUser()



  return (
    <div className='w-full fixed top-0 left-0 z-10  backdrop-blur-xl shadow-md shadow-gray-200/50'>
      <div className='max-w-6xl mx-auto py-4  justify-between flex'>
        <Link to='/' className='capitalize font-mono text-xl font-bold'>shoply │ <span className='text-green-900/50'>store</span></Link>

        <div className='flex space-x-4'>
          <Link to='/' className=''>Home</Link>
          <Link to='/products' className=''>Products</Link>
          <Link to='/cart' className=''>
          <div className="relative">
             <ShoppingBagIcon className="w-7 h-7" />
             <span className="absolute -top-2 left-5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-md -z-10">{count}</span>
          </div>
          </Link>
          <Link to='/contact' className=''>Contact</Link>
          <Link to='/about' className=''>About</Link>
        </div>

      {/* button*/}
        <div className=''>
          <div >
           {isSignedIn ? <div className="flex gap-2 cursor-pointer px-4 "> <h1 className="text-xl font-mono">{user.firstName}</h1> 

           <UserButton>
           <UserButton.MenuItems>
            <UserButton.Action
            label="My orders"
            labelIcon={<ClipboardDocumentListIcon className="w-4 h-4" />}
            onClick={()=>(navigate('/orders'))}
          />
        </UserButton.MenuItems>
      </UserButton>


           </div>  : <SignInButton mode="modal" >{!isLoaded ? <Skeletonbutton /> 
           :  <h1 className="capitalize px-5 py-1 rounded shadow border-gray-600/60 border shadow-gray-200/60 cursor-pointer">Get Started</h1>}</SignInButton>}
           </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar

//         <button className='capitalize px-5 py-1 rounded shadow border-gray-600/60 border shadow-gray-200/60'>get started</button>
/*{
            isSignedIn ? <div className="bg-gray-200/50 rounded-full  w-10 h-10 justify-center flex  shadow-2xl shadow-gray-300">
              <UserButton />
            </div> : <>
              {!isLoaded ? <Skeletonbutton /> : <button className='capitalize px-5 py-1 rounded shadow border-gray-600/60 border shadow-gray-200/60'>get started</button>}</>
          

              {
                !isLoaded && <Skeletonbutton/>
              }


              isSignedIn ? <UserButton/> : <SignInButton mode="modal" >Get Started</SignInButton>

              <h1 className="capitalize px-5 py-1 rounded shadow border-gray-600/60 border shadow-gray-200/60 cursor-pointer">Get Started</h1>

          }*/