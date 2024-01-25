import React, { useState,useEffect } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category'

function Categories() {

  const [categories, setCategories] =useState([])

  useEffect(() => {
    setCategories(categoryData)
  },[])

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-semibold text-center m-10'>Kategoriler</h3>
        <div className='grid grid-cols-3 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4'>
          {categories && categories.map((category, index) =>
            <Category key={index} category={category} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories