import "./App.css";
import Home from './pages/home'
import Navbar from "./components/Navbar"
import MetaTags from './components/Metatags';
import ParticlesBg from "particles-bg";

function App() {
    return (
        <>
            <MetaTags />
            <section className="bg-animation-container">
                <Navbar />
                <ParticlesBg type="polygon" bg={true} />
            </section>

            <div className="page-w">
                <Home />
            </div>


        </>
    );
}

export default App;
