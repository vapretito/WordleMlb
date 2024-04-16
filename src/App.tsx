import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa 'Routes'
import Wordle from "./components/wordle";
import Navbar from "./components/navBar";
import "./App.module.css";
import SideBar from "./components/sideBar";
import BingoBoard from "./components/bingo"; // Importa el componente BingoBoard
import { MLBPlayersData } from "./service/playersBingo"; // Importa los datos de los jugadores

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/wordle" element={<Wordle />} />
          {/* Pasa los datos reales de los jugadores a BingoBoard */}
          <Route path="/bingo" element={<BingoBoard playersData={MLBPlayersData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
