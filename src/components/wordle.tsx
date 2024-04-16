import RowCompleted from "./rowCompleted";
import RowCurrent from "./rowCurrent";
import RowEmpty from "./rowEmpty";
import { useEffect, useState } from "react";
import { GameStatus } from "./types";
import { useWindow } from "../hooks/useWindow";
import { getLastNameOfTheDay, isValidLastName } from "../service/request";
import styles from "./wordle.module.css"
import Keyboard from "./keyboard";
import Modal from "./modal";


const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  
  export default function Wordle() {
    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  
    useWindow("keydown", handleKeyDown);
  
    useEffect(() => {
        const wordOfTheDay = getLastNameOfTheDay();
        console.log("Word of the day:", wordOfTheDay);
        setWordOfTheDay(wordOfTheDay);
    }, []);
  
    function handleKeyDown(event: KeyboardEvent) {
      const key = event.key.toUpperCase();
  
      onKeyPressed(key);
    }
  
    function onKeyPressed(key: string) {
      if (gameStatus !== GameStatus.Playing) {
        return;
      }
  
      if (key === "BACKSPACE" && currentWord.length > 0) {
        onDelete();
        return;
      }
  
      if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
        onEnter();
        return;
      }
  
      if (currentWord.length >= 5) return;
  
      // ingresar la letra al estado
      if (keys.includes(key)) {
        onInput(key);
        return;
      }
    }
  
    function onInput(letter: string) {
      const newWord = currentWord + letter;
      setCurrentWord(newWord);
    }
  
    function onDelete() {
      const newWord = currentWord.slice(0, -1);
      setCurrentWord(newWord);
    }
  
    async function onEnter() {
      if (currentWord === wordOfTheDay) {
        //ganó el usuario
        setCompletedWords([...completedWords, currentWord]);
        setGameStatus(GameStatus.Won);
        return;
      }
  
      if (turn === 6) {
        //perdió el usuario
        setCompletedWords([...completedWords, currentWord]);
        setGameStatus(GameStatus.Lost);
        return;
      }
  
      // validar si existe la palabra
    
      setCompletedWords([...completedWords, currentWord]);
      setTurn(turn + 1);
      setCurrentWord("");
    }
  
    return (
      <>
        {gameStatus === GameStatus.Won ? (
          <Modal
            type="ganaste manin"
            completedWords={completedWords}
            solution={wordOfTheDay}
          />
        ) : gameStatus === GameStatus.Lost ? (
          <Modal
            type="perdiste manao"
            completedWords={completedWords}
            solution={wordOfTheDay}
            onClose={() => { /* Lógica para cerrar el modal */ }}
          />
        ) : null}
        <div className={styles.mainContainer}>
          {completedWords.map((word, i) => (
            <RowCompleted
              key={i}
              word={word}
              solution={wordOfTheDay}
              
            />
          ))}
  
          {gameStatus === GameStatus.Playing ? (
            <RowCurrent word={currentWord} />
          ) : null}
  
          {Array.from(Array(6 - turn)).map((_, i) => (
            <RowEmpty key={i} />
          ))}
        </div>
  
        <Keyboard keys={keys} onKeyPressed={onKeyPressed} />
      </>
    );
  }