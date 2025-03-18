import { useEffect, useState } from 'react'

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
    </>
  )
}

export default App
