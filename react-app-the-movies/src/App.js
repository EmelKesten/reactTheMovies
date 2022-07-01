import './App.css';
import NavBar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="content">
        <div id="search" class="layout"></div>
        <div id="popUp" class="noShow"></div>
        <div id="mostPopular"></div>
        <div id="nowPlaying"></div>
        <div id="upComing"></div>
      </div>
    </div>
  );
}

export default App;
