import React, { useState } from "react";
import styles from "./keyboard.module.css";

interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

export default function Keyboard({ keys, onKeyPressed }: KeyboardProps) {
  const [keyboardInUse, setKeyboardInUse] = useState(false);

  function handleInput(key: string) {
    onKeyPressed(key);
  }

  function handleEnter() {
    setKeyboardInUse(true);
    onKeyPressed("ENTER");
  }

  function handleDelete() {
    onKeyPressed("BACKSPACE");
  }

  return (
    <div className={`${styles.keyboardContainer} ${keyboardInUse ? styles.inUse : ""}`}>
      <div className={styles.row}>
        {keys.slice(0, 10).map((key, index) => (
          <button key={index} className={styles.key} onClick={() => handleInput(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        {keys.slice(10, 20).map((key, index) => (
          <button key={index + 10} className={styles.key} onClick={() => handleInput(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        <button className={styles.deleteKey} onClick={handleDelete}>
          DELETE
        </button>
        {keys.slice(20).map((key, index) => (
          <button key={index + 20} className={styles.key} onClick={() => handleInput(key)}>
            {key}
          </button>
        ))}
        <button className={styles.enterKey} onClick={handleEnter}>
          ENTER
        </button>
      </div>
    </div>
  );
}
