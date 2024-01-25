import React, { useEffect, useState } from 'react'
import Product from '../api/product.json'
import ProductItems from './ui/ProductItems'

function Favorites() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    setProduct(Product)
  }, [])
  return (
    <div>
      <h3 className='text-3xl font-semibold text-center m-10'>Favoriler</h3>
      <div className='grid grid-cols-3 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-1 bg-white rounded-lg overflow-hidden'>
        {product && product.map(products => <ProductItems products={products} />)}
      </div>

    </div>

  )
}

export default Favorites