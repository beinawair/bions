import React from 'react'
import '../../../App'
import HeroSection from '../../HeroSection'
import Youtube from '../../Youtube'
import About from '../../About'

function Home() {
    return (
        <>
            <HeroSection />
            <Youtube/>
            <About />
        </>
    )
}

export default Home