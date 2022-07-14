import './App.css';
import NavBar from './Navbar.js';
import TopMovies from './top-movies/Index';
import React from "react";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='cont'>
      <TopMovies></TopMovies>
      </div>
    </div>
  );
}

export default App;
