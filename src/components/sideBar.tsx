import React, { useState, useEffect } from 'react';
import styles from './sideBar.module.css'; // Importa estilos si es necesario
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger');

      if (sidebar && hamburger && !sidebar.contains(event.target as Node) && !hamburger.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div id="sidebar" className={sidebarOpen ? `${styles.sidebar} ${styles.show}` : styles.sidebar}>
        <ul>
        <li><Link to="/wordle">Wordle</Link></li>
          <li><Link to="/bingo">Bingo</Link></li>
          <li><a href="#">Crear Equipo</a></li>
          <li><a href="#">Mostrar Equipo</a></li>
        </ul>
        <div className="ad-box">
          <h3>Publicidad</h3>
          <p>¡Aprovecha nuestras ofertas especiales!</p>
        </div>
      </div>

      <button id="hamburger" className={sidebarOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}

export default SideBar;
