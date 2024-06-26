import React, {useState} from "react";
import { getImageUrl } from "../../utils";

import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className={styles.navbar}>
        <a href="/"><img className={styles.logo} src={getImageUrl("nav/mainLogo.png")}/></a>
        <div className={styles.menu}>
            <img 
                className={styles.menuButton} 
                src={menuOpen 
                    ? getImageUrl(`nav/closeIcon.png`)
                    : getImageUrl(`nav/menuIcon.png`)} 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#aboutMe">About Me</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};