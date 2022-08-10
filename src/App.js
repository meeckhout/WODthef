import './App.css';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {WODs} from './pages/WODs';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
            <Route path="WODs" element={<WODs />} />
        </Routes>
      </div>
  );
}

export default App;