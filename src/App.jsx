import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

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
    </>
  )
}

export default App
