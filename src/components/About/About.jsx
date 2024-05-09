import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="aboutMe">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm just starting out as a frontend developer.I have some experience in building responsive 
                                and optimized sites. I used React, JS, HTML, and CSS to create this website.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have proficient experience developing REST APIs in Java and Spring Boot. I have also worked with Python and Flask. This is where I have spent most of my time in software engineering.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have some experience with Figma and designing UI. I worked with a team in my UI class to create a user friendly app. We also engaged in user testing to refine the UI design.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
};