import React, { useState, useEffect } from 'react';
import styles from './cardvisible.module.css';
import PlayerCard from './playerCard';
import { MLBPlayers } from '../service/playersBingo';

const CardVisible = ({ playersData }: { playersData: MLBPlayers[] }) => {
  const [guessCount, setGuessCount] = useState(0);
  const [correctPlayer, setCorrectPlayer] = useState<MLBPlayers | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * playersData.length);
    setCorrectPlayer(playersData[randomIndex]);
  }, [playersData]);

  const handleGuess = (player: MLBPlayers) => {
    setGuessCount(guessCount + 3);
    if (player === correctPlayer) {
      alert('ERES BUENISIMO TROLITO');
    }
  };

  const blurLevel = Math.max(0, 30 - guessCount); // Controla el nivel de desenfoque

  return (
    <div>
      <div className={styles.card}>
        {correctPlayer && (
          <PlayerCard
            player={correctPlayer}
            matchingProperties={['country', 'team', 'position']}
            blurLevel={blurLevel}
            attempts={guessCount} // Pasa el número de intentos fallidos
          />
        )}
      </div>

      <div className={styles['select-player']}>
        <select
          onChange={(e) => {
            const playerId = parseInt(e.target.value, 10);
            const player = playersData.find((p) => p.id === playerId);
            if (player) {
              handleGuess(player);
            }
          }}
        >
          <option value="">Select a Player</option>
          {playersData.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}               {player.lastname}

            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CardVisible;
