import { createContext, useEffect, useState } from 'react'
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
    cart.map(product => {
      if(id == product.id) return true
    })
    return false
  }

  function addToCart(product) {
    setCart([
      ...cart,
      product
    ])
  }

  function removeFromCart(id) {
    cart.filter(product => product.id != id)
  }
  
  return (
    <>
      <Sidebar />
      <Outlet products={products} cart={cart} isInCart={isInCart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </>
  )
}

export default App
