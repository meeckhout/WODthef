import './App.css';
import {Header, Searchbar, GetApi} from './_partials';

function App() {
  return (
    <div className="container">
        <Header />

        <Searchbar />
        <GetApi />
    </div>
  );
}

export default App;
