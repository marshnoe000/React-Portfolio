import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Noelle</h1>
            <p className={styles.description}>
                I&apos;m a full-stack developer with some experience using 
                React and Node.js. Reach out if you would like to learn more!
            </p>
            <a href="mailto:noelle.marshall17@gmail.com" className={styles.contactButton}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImage}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};