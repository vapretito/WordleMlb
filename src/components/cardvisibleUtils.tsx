import { MLBPlayers } from '../service/playersBingo';

export const generateBoard = (playersData: MLBPlayers[]) => {
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
  
    return selectedPlayers;
  };