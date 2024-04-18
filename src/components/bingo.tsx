import React, { useState, useEffect } from 'react';
import styles from "./bingo.module.css";
import PlayerCard from './playerCard';
import { MLBPlayers } from './../service/playersBingo';
import { generateBoard } from './bingoUtils';


type MatchProperty = "position" | "country" | "team" | "record";


const BingoBoard = ({ playersData }: { playersData: MLBPlayers[] }) => {
  const [board, setBoard] = useState<MLBPlayers[]>([]);
  const [generatedPlayer, setGeneratedPlayer] = useState<MLBPlayers | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<MatchProperty | null>(null);

  useEffect(() => {
    setBoard(generateBoard(playersData));
  }, [playersData]);

  const generateRandomPlayer = () => {
    const index = Math.floor(Math.random() * playersData.length);
    setGeneratedPlayer(playersData[index]);
  };

  const handleCellClick = (property: MatchProperty) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <h2>Tablón de Bingo</h2>
      <button className={styles.button} onClick={generateRandomPlayer}>Generar jugador al azar</button>
      <div className={styles.bingoBoard}>
        {board.map((player, index) => (
          renderBingoCell(player, index)
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

  function renderBingoCell(player: MLBPlayers, index: number) {
    return (
      <div key={index} className={styles.gridCell}>
        {renderButton("position", player.position)}
        {renderButton("country", player.country)}
        {renderButton("team", player.team)}
        {renderButton("record", player.record)}
      </div>
    );
  }

  function renderButton(property: MatchProperty, value: string) {
    return (
      <button
        className={`${styles.bingoCell} ${selectedProperty === property && generatedPlayer && generatedPlayer[property] === value ? styles.matchingCell : ''}`}
        onClick={() => handleCellClick(property)}
      >
        <div className={styles.button}>{value}</div>
      </button>
    );
  }
};

export default BingoBoard;