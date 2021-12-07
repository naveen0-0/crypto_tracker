import React from 'react'
import styles from './Security.module.css'

export default function Security({ security }) {
  return (
    <div className={styles.security_issue}>
      <div className={styles.title}>{security.title}</div>
      <div className={styles.date}>{new Date(security.date).toLocaleDateString()}</div>
      <div className={styles.type}>Type : {security.type}</div>
      <div className={styles.details}>{security.details}</div>
    </div>
  )
}
