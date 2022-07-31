import "./App.css";
import NavBar from "./Navbar.js";
import TopMovies from "./top-movies/Index";
import React, { createContext, useState } from "react";
import NowPlaying from "./nowPlaying/Index";
import UpComing from "./upComing/Index";
import Search from "./search/Index";
import Modal from "./modal/Index";

export const SearchContext = createContext("");

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
        <NavBar />
        <Modal id="616037" />
        <div className="cont">
          <TopMovies></TopMovies>
          <NowPlaying></NowPlaying>
          <UpComing></UpComing>
        </div>
    </div>
  );
}

export default App;
