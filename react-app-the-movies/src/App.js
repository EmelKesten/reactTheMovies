import './App.css';
import NavBar from './Navbar.js';
import TopMovies from './top-movies/Index';
import React from "react";
import NowPlaying from './nowPlaying/Index';
import UpComing from './upComing/Index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='cont'>
        <TopMovies></TopMovies>
        <NowPlaying></NowPlaying>
        <UpComing></UpComing>
      </div>
    </div>
  );
}

export default App;
