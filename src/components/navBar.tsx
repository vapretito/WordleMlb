// Navbar.js
import React from 'react';
import styles from './navBar.module.css'; // No es necesario añadir .module.css al final

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/jhk3gttcngayinbx5r6d.jpg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navbarBrand}>
        <h1>WorldMLB</h1>
      </div>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <a href="#" className={styles.navbarMenuLink}></a>
        </li>
        <li className={styles.navbarMenuItem}>
          <a href="#" className={styles.navbarMenuLink}>Acerca de</a>
        </li>
        <li className={styles.navbarMenuItem}>
          <a href="#" className={styles.navbarMenuLink}>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
