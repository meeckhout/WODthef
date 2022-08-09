import './App.css';
import {Header, Searchbar, Navbar} from './_partials';

function App() {
  return (
    <div className="container">
        <Navbar />
        <Header />
        <Searchbar />
    </div>
  );
}

export default App;
