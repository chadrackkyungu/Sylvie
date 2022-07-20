import "./App.css";
import Home from './pages/home'
import Navbar from "./components/Navbar"

function App() {
    return (
        <div>
            <Navbar>
                <Navbar />
                <div className="page-w">
                    <Home />
                </div>
        </div>
    );
}

export default App;
