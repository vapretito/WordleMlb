import React, { useState } from 'react';
import styles from "./playerCard.module.css";
import { MLBPlayers } from './../service/playersBingo';

interface Props {
  player: MLBPlayers;
  matchingProperties: string[];
  blurLevel?: number; // Nivel de desenfoque (opcional)
  attempts: number;  // Número de intentos fallidos
}

const PlayerCard: React.FC<Props> = ({ player, matchingProperties, blurLevel = 10, attempts }) => {
  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar si la carta está volteada

  const flipCard = () => {
    setIsFlipped(!isFlipped); // Alterna el estado para voltear la carta
  };

  const blurStyle = { filter: `blur(${blurLevel}px)` }; // Controla el desenfoque

  const visiblePropertiesCount = Math.floor(attempts / 5); // Cada 5 intentos muestra una propiedad
  const visibleProperties = ["country", "team", "position", "name", "lastname", "mvp", "record", "otherLeague"];
  const shownProperties = visibleProperties.slice(0, visiblePropertiesCount); // Propiedades según intentos

  return (
    <div className={styles.cardContainer} onClick={flipCard}> {/* Contenedor para la carta */}
      <div className={`${styles.playerCard} ${isFlipped ? styles.flipped : ''}`}> {/* Aplica el giro si está volteada */}
        <div className={styles.front}> {/* Parte frontal de la carta */}
         <img 
            src={require("../service/img/Wordl-MLB-23-4-2024.png")} 
            className={styles.frontImage} 
            alt="Front Image" 
          /> {/* Imagen en el frente */}
        </div>

        <div className={styles.back}> {/* Parte trasera de la carta */}
          <div className={styles.cardHeader}>
            <h2 style={blurStyle}>{`${player.name} ${player.lastname}`}</h2> {/* Datos del jugador */}
          </div>
          <img 
            src={player.img} 
            alt={`${player.name} ${player.lastname}`} 
            className={styles.playerImage} 
            style={blurStyle} // Aplica el desenfoque
          />
          <div className={styles.cardDetails}> {/* Propiedades mostradas */}
            {shownProperties.includes("country") && (
              <p className={matchingProperties.includes("country") ? styles.matching : ''}>🌍 {player.country}</p>
            )}
            {shownProperties.includes("team") && (
              <p className={matchingProperties.includes("team") ? styles.matching : ''}>🛡️ {player.team}</p>
            )}
            {shownProperties.includes("position") && (
              <p className={matchingProperties.includes("position") ? styles.matching : ''}>⚾ {player.position}</p>
            )}
            {shownProperties.includes("record") && (
              <p className={matchingProperties.includes("record") ? styles.matching : ''}>🏆 {player.record}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

