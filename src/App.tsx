import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wordle from "./components/wordle";
import Navbar from "./components/navBar";
import "./App.module.css";
import SideBar from "./components/sideBar";
import BingoBoard from "./components/bingo";
import { MLBPlayersData } from "./service/playersBingo";
import styles from "./CenterBox.module.css"; // Importa los estilos para el cuadro central

function CenterBox() {
  return (
    <div className={styles.centerBox}>
      <h2>Elija un juego</h2>
      <div className={styles.buttonsContainer}>
        <Link to="/wordle" className={styles.button}>
          Wordle ⚾
        </Link>
        <Link to="/bingo" className={styles.button}>
          Bingo ⚾
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<CenterBox />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/bingo" element={<BingoBoard playersData={MLBPlayersData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
