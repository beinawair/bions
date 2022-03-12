import React from 'react'
import '../../../App'
import HeroSection from '../../HeroSection'
import Youtube from '../../Youtube'
import About from '../../About'
import Footer from '../../Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <Youtube/>
            <About />
            <Footer />
        </>
    )
}

export default Home