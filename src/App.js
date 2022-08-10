import './App.css';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {WODs} from './pages/WODs';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
            <Route path="WODs" element={<WODs />} />
        </Routes>
      </div>
  );
}

export default App;
