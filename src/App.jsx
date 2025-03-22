import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    function getProducts() {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setProducts(json))
    }
    getProducts()
  }, [])

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
