import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './cardvisible.module.css';
import PlayerCard from './playerCard';
import { MLBPlayers } from '../service/playersBingo';
import ModalCard from './modalCard'; // Importar el modal

type CardVisibleProps = {
  playersData: MLBPlayers[];
};

type Attempt = {
  player: MLBPlayers;
  correct: boolean;
};

const CardVisible = ({ playersData }: CardVisibleProps) => {
  const [guessCount, setGuessCount] = useState<number>(0);
  const [correctPlayer, setCorrectPlayer] = useState<MLBPlayers | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // Control de visibilidad del modal
  const [remainingPlayers, setRemainingPlayers] = useState<MLBPlayers[]>(playersData);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * playersData.length);
    setCorrectPlayer(playersData[randomIndex]);
  }, [playersData]);

  const handleGuess = (player: MLBPlayers) => {
    setGuessCount(guessCount + 1);
    const isCorrect = player === correctPlayer;

    setAttempts((prev) => [...prev, { player, correct: isCorrect }]);

    if (isCorrect) {
      setIsModalVisible(true); // Mostrar el modal cuando se adivine el jugador
    }

    setRemainingPlayers((prev) => prev.filter((p) => p.id !== player.id));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredPlayers = remainingPlayers.filter((player) =>
    `${player.name} ${player.lastname}`.toLowerCase().includes(searchText.toLowerCase())
  );

  const blurLevel = correctPlayer
    ? attempts.some((a) => a.correct)
      ? 0
      : Math.max(0, 15- guessCount * 2)
    : 15;

    return (
      <div className={styles.cardContainer}>
        {isModalVisible && correctPlayer && (
          <ModalCard
            player={correctPlayer}
            onClose={() => setIsModalVisible(false)}
          />
        )}
    
        <div className={styles.card}>
          {correctPlayer && (
            <PlayerCard
              player={correctPlayer}
              matchingProperties={['country', 'team', 'position']}
              blurLevel={blurLevel}
              attempts={guessCount}
            />
          )}
        </div>
    
        <div className={styles['search-bar']}>
          <input
            type="text"
            placeholder="Buscar Jugador"
            value={searchText}
            onChange={handleSearchChange}
          />
          {searchText && (
            <div className={styles['dropdown']}>
              {filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  className={styles['dropdown-item']}
                  onClick={() => handleGuess(player)}
                >
                  {player.name} {player.lastname}
                </div>
              ))}
            </div>
          )}
        </div>
    
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
  }    

export default CardVisible;
