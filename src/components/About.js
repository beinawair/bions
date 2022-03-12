import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about-container'>
        <div className='about-wrapper'>
            <div className='about-details'>
                <h1>About Us</h1>
                <span></span>
                <p>
                    We love to share with everyone 
                </p>
            </div>
            <div className='about-images'>
                <img className='img' src='/img/img01.png' alt=''/>
                <img className='img' src='/img/img02.png' alt=''/>
                <img className='img' src='/img/img03.png' alt=''/>
                <img className='img' src='/img/img04.png' alt=''/>
                <img className='img' src='/img/img05.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About