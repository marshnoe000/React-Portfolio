import React from 'react'
import { getImageUrl } from '../../utils'

import styles from '../Contact/Contact.module.css'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.contactPhrase}>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:noelle.marshall17@gmail.com">noelle.marshall17@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/noelle-nielson-byu/">linkedin.com/noelle-nielson-byu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/marshnoe000">github.com/marshnoe000</a>
            </li>
        </ul>
    </footer>
  )
}
