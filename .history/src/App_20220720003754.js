import "./App.css";
import Home from './pages/home'
import Navbar from "./components/Navbar"
import MetaTags from './components/Metatags';

function App() {
    return (
        <>
            <MetaTags />

            <Navbar />

            {/* <div className="page-w">
                <Home />
            </div> */}


        </>
    );
}

export default App;
