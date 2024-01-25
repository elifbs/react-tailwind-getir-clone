import React from 'react'

function Category({ category: { id, title, image } }) {
  return (
    <a href='#' className='flex flex-col group items-center gap-y-2 text-center transition hover:bg-purple-100 p-4'>
      <img src={image} alt={title} className='w-12 h-12 rounded border border-gray-200' />
      <span className='text-sm text-gray-700 group-hover:text-purple-900 font-semibold tracking-tight'>{title}</span>
    </a>
  )
}

export default Category