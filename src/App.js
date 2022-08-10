import './App.css';
import { Home } from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <div className="navigation">
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="about" element={<About />} />*/}

            </Routes>
        </div>
    </div>
  );
}

export default App;
