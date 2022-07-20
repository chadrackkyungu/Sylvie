import React, { useEffect } from 'react'
import "./App.css";
import Home from './pages/home'
import MetaTags from './components/Metatags';
import AOS from "aos"
import "aos/dist/aos.css"


function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
        AOS.refresh()
    }, [])


    return (
        <>
            <MetaTags />
            <Home />
        </>
    );
}

export default App;
