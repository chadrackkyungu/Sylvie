import React from 'react'
import Navbar from "./../components/Navbar"
import About from "./../sections/About"
import Who from "./../sections/Who_we_are"
import Services from "./../sections/Services"
import Contact from "./../sections/Contact"
import Footer from "./../components/Footer"
import ParticlesBg from "particles-bg";

function home() {
    return (
        <>
            <section className="home">
                <Navbar />
            </section>

            <div className="section-container">
                <About />
            </div>

            <div className="section-container">
                <Who />
            </div>

            <div className="banner">
                <ParticlesBg type="lines" bg={true} />
            </div>

            <div className="service-container">
                <div className="section-container service-content">
                    <Services />
                </div>
            </div>


            <Contact />
            <Footer />
        </>
    )
}

export default home