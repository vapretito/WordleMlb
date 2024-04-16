import React from 'react';
import styles from "./playerCard.module.css";
import { MLBPlayers } from './../service/playersBingo';

interface Props {
  player: MLBPlayers;
  matchingProperties: string[];
}

const PlayerCard: React.FC<Props> = ({ player, matchingProperties }) => {
    const hasMatchingProperty = (property: string) => {
    return matchingProperties.includes(property);
  };

  return (
    <div className={styles.playerCard}>
      <img src={player.img} alt={`${player.name} ${player.lastname}`} className={styles.playerImage} />
      <p className={hasMatchingProperty('name') ? styles.matching : ''}>Name: {player.name}</p>
      <p className={hasMatchingProperty('lastname') ? styles.matching : ''}>Lastname: {player.lastname}</p>
      <p className={hasMatchingProperty('country') ? styles.matching : ''}>Country: {player.country}</p>
      <p className={hasMatchingProperty('team') ? styles.matching : ''}>Team: {player.team}</p>
      <p className={hasMatchingProperty('mvp') ? styles.matching : ''}>MVP: {player.mvp ? 'Yes' : 'No'}</p>
      <p className={hasMatchingProperty('record') ? styles.matching : ''}>Record: {player.record}</p>
      <p className={hasMatchingProperty('otherLeague') ? styles.matching : ''}>Other League: {player.otherLeague ? 'Yes' : 'No'}</p>
      <p className={hasMatchingProperty('position') ? styles.matching : ''}>Position: {player.position}</p>
    </div>
  );
};

export default PlayerCard;
