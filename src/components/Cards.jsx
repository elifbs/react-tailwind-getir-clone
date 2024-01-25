import React, { useEffect, useState } from 'react'
import cardsData from '../api/cards.json'

function Cards() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  }, [])


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4'>
      {cards.length && cards.map(card => (
        <div className='bg-white text-center p-10 rounded-lg flex flex-col items-center justify-center shadow-sm'>
          <img src={card.image} alt="" />
          <h6 className='mt-6 text-xl mb-5 text-purple-800'> {card.title} </h6>
          <p> {card.description} </p>
        </div>
      ))}
    </div>
  )
}

export default Cards