import React from 'react'
import styles from './OrganizationContributor.module.css'

export default function OrganizationContributor({ contributor }) {
  return (
    <div className={styles.contributor}>

      <div className={styles.logo}>
        <img src={contributor.logo} alt="Logo" className={styles.logo_img}/>
      </div>

      <div className={styles.name}>
        {contributor.name}
      </div>

      <div className={styles.description}>
        <details className={styles.details}>
          {contributor.description}
          <summary className={styles.summary}>Description</summary>
        </details>
      </div>

    </div>
  )
}
