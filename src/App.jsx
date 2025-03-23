import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    function getProducts() {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setProducts(json))
    }
    getProducts()
  }, [])
  
  function isInCart(id) {
    return cart.some(product => product.id == id)
  }

  function addToCart(product) {
    setCart((prevCart) => [...prevCart,product])
  }

  function removeFromCart(id) {
    setCart(cart.filter(product => product.id != id))
  }
  
  return (
    <>
      <Sidebar />
      <Outlet context={{products, cart, isInCart, addToCart, removeFromCart}} />
    </>
  )
}

export default App
