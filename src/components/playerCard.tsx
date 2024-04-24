import React from 'react';
import styles from "./playerCard.module.css";
import { MLBPlayers } from './../service/playersBingo';

interface Props {
  player: MLBPlayers;
  matchingProperties: string[];
  blurLevel?: number; // Nivel de desenfoque (opcional)
  attempts: number;  // Número de intentos fallidos
}

const PlayerCard: React.FC<Props> = ({ player, matchingProperties, blurLevel = 10, attempts }) => {
  const hasMatchingProperty = (property: string) => {
    return matchingProperties.includes(property);
  };

  const blurStyle = { filter: `blur(${blurLevel}px)` }; // Estilo para aplicar desenfoque

  const visiblePropertiesCount = Math.floor(attempts / 5); // Cada 5 intentos se muestra una propiedad
  const visibleProperties = ["country", "team", "position", "name", "lastname", "mvp", "record", "otherLeague"]; // Todas las propiedades disponibles
  const shownProperties = visibleProperties.slice(0, visiblePropertiesCount); // Propiedades que se muestran según los intentos

  return (
    <div className={styles.playerCard}>
      <div className={styles.cardHeader}>
        <h2 style={blurStyle} >{`${player.name} ${player.lastname}`}</h2>
      </div>
      <img 
        src={player.img} 
        alt={`${player.name} ${player.lastname}`} 
        className={styles.playerImage} 
        style={blurStyle} // Aplica el nivel de desenfoque
      />
      <div className={styles.cardDetails}>
        {shownProperties.includes("country") && (
          <p className={hasMatchingProperty("country") ? styles.matching : ""}>Country: {player.country}</p>
        )}
        {shownProperties.includes("team") && (
          <p className={hasMatchingProperty("team") ? styles.matching : ""}>Team: {player.team}</p>
        )}
        {shownProperties.includes("position") && (
          <p className={hasMatchingProperty("position") ? styles.matching : ""}>Position: {player.position}</p>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
