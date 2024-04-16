import styles from "./modal.module.css";
import { getLastNameOfTheDay, getPlayerInfo } from "../service/request"; 

interface ModalProps {
  type: "ganaste manin" | "perdiste manao";
  completedWords: string[];
  solution: string;
  onClose?: () => void; // onClose ahora es requerido
}



interface SquareProps {
  word: string;
  solution: string;
}

export default function Modal({ type, completedWords, solution, onClose }: ModalProps) {
  function Square({ word, solution }: SquareProps) {
    function checkLetter(letter: string, pos: number): string {
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          return "🟩";
        } else {
          return "🟨";
        }
      } else {
        return "⬛";
      }
    }
    return (
      <div className={styles.puzzleWord}>
        {word.split("").map((letter, i) => (
          <div key={i}>{checkLetter(letter, i)}</div>
        ))}
      </div>
    );
  }

  const lastNameOfTheDay = getLastNameOfTheDay();
  const playerInfo = getPlayerInfo(); // Obtiene la información del jugador

  return (
    <div className={styles.modalViewContainer}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>X</button> {/* Botón de cierre */}
        <h2>{type === "ganaste manin" ? "¡Ganaste manin!" : "Perdiste manao"}</h2>
        <h3>El Jugador del dia es {playerInfo.name} {lastNameOfTheDay}</h3>
        <img src={playerInfo.img} alt="img" />
        <h4>{playerInfo.team}</h4> 
        <h4>Position: {playerInfo.position}</h4>
        <h4>Country: {playerInfo.country}</h4> 
        <div className={styles.puzzle}>
          {completedWords.map((word, i) => (
            <Square key={i} word={word} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
}