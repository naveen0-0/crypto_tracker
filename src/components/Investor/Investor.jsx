import React from 'react'
import styles from './Investor.module.css'

export default function Investor({investor}) {
  return (
    <div className={styles.contributor}>

      <div className={styles.logo}>
        <img src={investor.logo} alt="Logo" className={styles.logo_img}/>
      </div>

      <div className={styles.name}>
        {investor.name}
      </div>

      <div className={styles.description}>
        <details className={styles.details}>
          {investor.description}
          <summary className={styles.summary}>Description</summary>
        </details>
      </div>

    </div>
  )
}
