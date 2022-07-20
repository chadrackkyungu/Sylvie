import React from 'react'
import Navbar from "./../components/Navbar"
import About from "./../sections/About"
import ParticlesBg from "particles-bg";

function home() {
    return (
        <>
            <section className="home">
                <Navbar />
            </section>
            <About />
        </>
    )
}

export default home