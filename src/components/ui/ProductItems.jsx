import React from 'react'
import { BsPlus } from "react-icons/bs";

function ProductItems({ products }) {
    return (
        <div className='flex bg-white flex-col relative gap-y-1 p-3 items-center font-semibold text-sm text-center'>
            <button className='absolute right-3 top-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-purple-600 hover:text-yellow-400'>
                <BsPlus size={18} />
            </button>
            <img src={products.image} alt={products.title} />
            <div className='text-purple-700'>{products.price}</div>
            <div className='text-gray-900'>{products.title}</div>
            <div className='text-gray-500'>{products.alt}</div>
        </div>
    )
}

export default ProductItems