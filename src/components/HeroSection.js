import React from 'react'
import '../App.css'
import { Button } from './Button'
import './heroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/bions-background.mp4' autoPlay loop muted />
        <h1>Bincang Online Inspiratif</h1>
        <p>Learn by sharing</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Visit Our Channel
            </Button>
        </div>
    </div>
  )
}

export default HeroSection