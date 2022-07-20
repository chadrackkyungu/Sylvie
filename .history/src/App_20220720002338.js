import "./App.css";
import Home from './pages/home'
import Navbar from "./components/Navbar"
import MetaTags from 'react-meta-tags';

function App() {
    return (
        <>
            <MetaTags>
                <title>Sylvie Holdings (LTD) </title>
                <meta id="meta-description" name="description" content="Some description." />
                <meta id="og-title" property="og:title" content="MyApp" />
                <meta id="og-image" property="og:image" content="path/to/image.jpg" />
            </MetaTags>

            <Navbar />
            <div className="page-w">
                <Home />
            </div>
        </>
    );
}

export default App;
