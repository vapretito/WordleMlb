import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para navegación
import styles from './navBar.module.css';
import WorldMLBLogo from "../service/img/Wordl-MLB-23-4-2024.png"; // Importar la imagen

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"> {/* Enlazar al inicio */}
        <img src={WorldMLBLogo} alt="WorldMLB" className={styles.logo} />
      </Link>
    </nav>
  );
};

export default Navbar;

