import React from 'react'
import CardItenm from './CardItem'
import './cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out Our Videos</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItenm />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards