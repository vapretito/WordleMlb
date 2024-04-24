import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wordle from "./components/wordle";
import Navbar from "./components/navBar";
import "./App.module.css";
import SideBar from "./components/sideBar";
import BingoBoard from "./components/bingo";
import { MLBPlayersData } from "./service/playersBingo";
import Home from "./components/home";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/bingo" element={<BingoBoard playersData={MLBPlayersData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
