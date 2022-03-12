import React from 'react'
import { Link } from 'react-router-dom'

function CardItenm(props) {
    return(
        <>
            <li className='cards__item'>
                <Link to='#' className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img src='/' alt='video youtube' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' />
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItenm