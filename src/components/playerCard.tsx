import React, { useState } from 'react';
import styles from './playerCard.module.css';
import { MLBPlayers } from './../service/playersBingo';

interface Props {
  player: MLBPlayers;
  matchingProperties: string[];
  blurLevel?: number; // Nivel de desenfoque
  attempts: number;  // Número de intentos fallidos
}

const PlayerCard: React.FC<Props> = ({ player, matchingProperties, blurLevel = 10, attempts }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const visiblePropertiesCount = Math.floor(attempts / 5); // Cada 5 intentos muestra una propiedad
  const visibleProperties = ['country', 'team', 'position', 'name', 'lastname', 'mvp', 'record', 'otherLeague'];
  const shownProperties = visibleProperties.slice(0, visiblePropertiesCount);

  return (
    <div className={styles.cardContainer} onClick={flipCard}>
      <div className={`${styles.playerCard} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.front}>
          <img 
            src={require('../service/img/Wordl-MLB-23-4-2024.png')} 
            className={styles.frontImage} 
            alt='Front Image' 
          />
        </div>

        <div className={styles.back}>
          <div className={styles.cardHeader}>
            <h2 style={{ filter: `blur(${blurLevel}px)` }}>{`${player.name} ${player.lastname}`}</h2>
          </div>
          <img
            src={player.img}
            alt={`${player.name} ${player.lastname}`}
            className={styles.playerImage}
            style={{ filter: `blur(${blurLevel}px)` }}
          />
          <div className={styles.cardDetails}>
            {shownProperties.includes('country') && (
              <p className={styles.fadeIn}>{`🌍 ${player.country}`}</p>
            )}
            {shownProperties.includes('team') && (
              <p className={styles.fadeIn}>{`🛡️ ${player.team}`}</p>
            )}
            {shownProperties.includes('position') && (
              <p className={styles.fadeIn}>{`⚾ ${player.position}`}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
