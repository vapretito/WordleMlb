import React, { useState, useEffect } from 'react';
import styles from "./bingo.module.css";
import PlayerCard from './playerCard';
import { MLBPlayers } from './../service/playersBingo';

type MatchProperty = "position" | "country" | "team" | "record";

const BingoBoard = ({ playersData }: { playersData: MLBPlayers[] }) => {
  const [board, setBoard] = useState<MLBPlayers[]>([]);
  const [generatedPlayer, setGeneratedPlayer] = useState<MLBPlayers | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<MatchProperty | null>(null); // Estado para la propiedad seleccionada

  useEffect(() => {
    generateBoard();
  }, []);

  const generateBoard = () => { 
    const selectedPlayers: MLBPlayers[] = [];
    const properties = new Set<string>();
  
    while (selectedPlayers.length < 2) {
      const randomIndex = Math.floor(Math.random() * playersData.length);
      const player = playersData[randomIndex];
  
      if (!properties.has(player.position) && !properties.has(player.country) && !properties.has(player.team) && !properties.has(player.record)) {
        properties.add(player.position);
        properties.add(player.country);
        properties.add(player.team);
        properties.add(player.record);
        selectedPlayers.push(player);
      }
    }
  
    setBoard(selectedPlayers);
  };

  const generateRandomPlayer = () => {
    const index = Math.floor(Math.random() * playersData.length);
    setGeneratedPlayer(playersData[index]);
  };

  const handleCellClick = (property: MatchProperty) => {
    setSelectedProperty(property); // Actualizar la propiedad seleccionada al hacer clic en la celda
  };

  return (
    <div>
      <h2>Tablón de Bingo</h2>
      <button className={styles.button} onClick={generateRandomPlayer}>Generar jugador al azar</button>
      <div className={styles.bingoBoard}>
        {board.map((player, index) => (
          <div key={index} className={styles.gridCell}>
            <button
              className={`${styles.bingoCell} ${selectedProperty === "position" && generatedPlayer && generatedPlayer.position === player.position ? styles.matchingCell : ''}`}
              onClick={() => handleCellClick("position")}
            >
              <div className={styles.button}>{player.position}</div>
            </button>
            <button
              className={`${styles.bingoCell} ${selectedProperty === "country" && generatedPlayer && generatedPlayer.country === player.country ? styles.matchingCell : ''}`}
              onClick={() => handleCellClick("country")}
            >
              <div className={styles.button}>{player.country}</div>
            </button>
            <button
              className={`${styles.bingoCell} ${selectedProperty === "team" && generatedPlayer && generatedPlayer.team === player.team ? styles.matchingCell : ''}`}
              onClick={() => handleCellClick("team")}
            >
              <div className={styles.button}>{player.team}</div>
            </button>
            <button
              className={`${styles.bingoCell} ${selectedProperty === "record" && generatedPlayer && generatedPlayer.record === player.record ? styles.matchingCell : ''}`}
              onClick={() => handleCellClick("record")}
            >
              <div className={styles.button}>Record: {player.record}</div>
            </button>
          </div>
        ))}
      </div>
      {generatedPlayer && (
        <div>
          <h3>Jugador Generado:</h3>
          <PlayerCard player={generatedPlayer} matchingProperties={[]} />
        </div>
      )}
    </div>
  );
};

export default BingoBoard;
