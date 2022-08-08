import './App.css';
import Header from './components/Header.jsx';
import Searchbar from './components/Searchbar'

function App() {
  return (
    <div className="container">
        <div>
      <Header />
        </div>

        <Searchbar />
    </div>
  );
}

export default App;
