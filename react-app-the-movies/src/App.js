import './App.css';
import NavBar from './Navbar.js';
import GetPopularMovies from './MostPopular';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <GetPopularMovies></GetPopularMovies>
    </div>
  );
}

export default App;
