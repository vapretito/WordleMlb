import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topHeadingContainer}>
        <h2 className={styles.mainHeading}>
          ¡Adivina diariamente un jugador de béisbol!
        </h2>
      </div>
      
      <div className={styles.centerBox}>
        <div className={styles.buttonsContainer}>
          <Link to="/wordle" className={styles.button}>
            Wordle ⚾
            {/* Sección que aparece al hacer hover */}
            <div className={styles.extraInfo}>
              Adivina el apellido del jugador diario.
            </div>
          </Link>
          
          <Link to="/bingo" className={styles.button}>
            Carta 
            <div className={styles.extraInfo}>
              Descubre el jugador...
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
