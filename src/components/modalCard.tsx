import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styles from './modalCard.module.css';
import { MLBPlayers } from './../service/playersBingo';

interface ModalProps {
  player: MLBPlayers;
  onClose: () => void;
}

const ModalCard: React.FC<ModalProps> = ({ player, onClose }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Confetti width={windowWidth} height={windowHeight} />
      <div className={styles.modalOverlay}>
        <div
          className={`${styles.modalContent} ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <button onClick={onClose} className={styles.closeButton}>✖️</button>
          
          <h2>¡Jugador Adivinado!</h2>

          <div className={styles.imageContainer}> {/* Contenedor para centrar la imagen */}
            <img src={player.img} alt={`${player.name} ${player.lastname}`} className={styles.playerImage} />
          </div>

          <p>{`Has adivinado a ${player.name} ${player.lastname}`}</p>
          <p>🌍 País: {player.country}</p>
          <p>🛡️ Equipo: {player.team}</p>
          <p>⚾ Posición: {player.position}</p>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
