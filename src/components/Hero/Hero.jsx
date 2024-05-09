import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Noelle</h1>
            <p className={styles.description}>
                I&apos;m a software engineer. I&apos;ve mainly done backend in Java but am currently learning and practicing React and JavaScript. Reach out if you would like to talk to me about any of my projects or potential jobs!
            </p>
            <a href="mailto:noelle.marshall17@gmail.com" className={styles.contactButton}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/Me.jpg")} alt="Hero image of me" className={`${styles.heroImage} ${styles.vignetteEffect}`}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};