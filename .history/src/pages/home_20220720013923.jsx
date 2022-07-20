import React from 'react'
import Navbar from "./../components/Navbar"
import About from "./../sections/About"
import Who from "./../sections/Who_we_are"
import Services from "./../sections/Services"
import Contact from "./../sections/Contact"

function home() {
    return (
        <>
            <section className="home">
                <Navbar />
            </section>

            <div className="sections-container">
                <About />
                <Who />
                <Services />
                <Contact />
            </div>
        </>
    )
}

export default home