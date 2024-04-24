import React, { useState, useEffect } from 'react';
import styles from './cardvisible.module.css';
import PlayerCard from './playerCard';
import { MLBPlayers } from '../service/playersBingo';

const CardVisible = ({ playersData }: { playersData: MLBPlayers[] }) => {
  const [guessCount, setGuessCount] = useState(0);
  const [correctPlayer, setCorrectPlayer] = useState<MLBPlayers | null>(null);
  const [attempts, setAttempts] = useState<{ player: MLBPlayers; correct: boolean }[]>([]); // Lista de intentos

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * playersData.length);
    setCorrectPlayer(playersData[randomIndex]);
  }, [playersData]);

  const handleGuess = (player: MLBPlayers) => {
    setGuessCount(guessCount + 1);
    const isCorrect = player === correctPlayer;

    setAttempts((prev) => [...prev, { player, correct: isCorrect }]);

    if (isCorrect) {
      alert('ERES BUENISIMO TROLITO');
    }
  };

  const blurLevel = correctPlayer ? (attempts.some((a) => a.correct) ? 0 : Math.max(0, 30 - guessCount)) : 30;

  return (
    <div className={styles.cardContainer}>
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
          <option value="">Selecciona un Jugador</option>
          {playersData.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name} {player.lastname}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar lista de intentos */}
      <div className={styles.attemptsList}>
        {attempts.map((attempt, index) => (
          <div
            key={index}
            className={`${styles.attempt} ${attempt.correct ? styles.correct : styles.incorrect}`}
          >
            {attempt.player.name} {attempt.player.lastname}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardVisible;
