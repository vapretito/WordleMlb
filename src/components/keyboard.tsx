import React, { useState } from "react";
import styles from "./keyboard.module.css";

interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

export default function Keyboard({ keys, onKeyPressed }: KeyboardProps) {
  const [keyboardInUse, setKeyboardInUse] = useState(false);

  function handleInput(e: any) {
    onKeyPressed(e.target.textContent);
  }

  function handleEnter(e: any) {
    setKeyboardInUse(true);
    onKeyPressed("ENTER");
  }

  function handleDelete(e: any) {
    onKeyPressed("BACKSPACE");
  }

  return (
    <div className={`${styles.keyboardContainer} ${keyboardInUse ? styles.inUse : ""}`}>
      {keys.slice(0, 10).map((key, index) => (
        <button key={index} className={styles.key} onClick={handleInput}>
          {key}
        </button>
      ))}
      {keys.slice(10, 20).map((key, index) => (
        <button key={index + 10} className={styles.key} onClick={handleInput}>
          {key}
        </button>
      ))}
      <button className={styles.deleteKey} onClick={handleDelete}>
        DELETE
      </button>
      {keys.slice(20).map((key, index) => (
        <button key={index + 20} className={styles.key} onClick={handleInput}>
          {key}
        </button>
      ))}
      <button className={styles.enterKey} onClick={handleEnter}>
        ENTER
      </button>
    </div>
  );
}
