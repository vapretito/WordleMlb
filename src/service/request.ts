import { Players } from "./players";

export function getLastNames() {
    const lastNames = Players.map(player => player.lastname);
    console.log("Apellidos obtenidos:", lastNames);
    return lastNames;
}

export function getLastNameOfTheDay() {
    const lastNames = getLastNames();
    const dayOfYear = getDayOfTheYear();
    const index = dayOfYear % lastNames.length;
    return lastNames[index].toUpperCase();
}

export function getPlayerInfo() {
    const dayOfYear = getDayOfTheYear();
    const playerIndex = dayOfYear % Players.length;
    const player = Players[playerIndex];
    
    console.log("Información del jugador:", player);
    
    return {
        name: player.name,
        country: player.country,
        position: player.position,
        team: player.team,
        img: player.img
    };
}


export function isValidLastName(word: string) {
    const lastNames = getLastNames();
    return lastNames.includes(word.trim().toLocaleLowerCase());
}


function getDayOfTheYear(){
    const now= new Date();
    const start = new Date ( now.getFullYear(), 0, 0);
    const diff =
    (now as any)-
    (start as any)+
    (start.getTimezoneOffset()- now.getTimezoneOffset())*60 * 1000;
    const oneDay= 1000* 60*60*24;
    return Math.floor(diff/oneDay);
}