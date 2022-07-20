import React from 'react'
import Navbar from "./../components/Navbar"
import About from "./../sections/About"

function home() {
    return (
        <>
            <section className="home">
                <Navbar />
                <ParticlesBg type="polygon" bg={true} />
            </section>
            <About />
        </>
    )
}

export default home