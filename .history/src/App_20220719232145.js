import "./App.css";
import Home from './pages/home'
import Navbar from "./components/Navbar"

function App() {
    return (
        <>
            <Navbar>
                <Navbar />
                <div className="page-w">
                    <Home />
                </div>
            </>
            );
}

            export default App;
