import React from 'react'
import '../App.css'
import './heroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={process.env.PUBLIC_URL + '/videos/bions-background.mp4'} autoPlay loop muted />
        <h1>Bincang Online Inspiratif</h1>
        <p>Learn by sharing</p>
        <div className='hero-btns'>
            <a className='btn btn--outline' href="https://www.youtube.com/c/BINCANGONLINEINSPIRATIF" target='_blank' rel="noopener noreferrer">
              OUR CHANNEL
            </a>
        </div>
    </div>
  )
}

export default HeroSection
