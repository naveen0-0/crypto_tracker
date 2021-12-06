import React from 'react'
import styles from './Security.module.css'
import ReactHtmlParser from "react-html-parser";

export default function Security({ security }) {
  return (
    <div className={styles.security_issue}>
      <div className={styles.title}>{security.title}</div>
      <div className={styles.date}>{new Date(security.date).toLocaleDateString()}</div>
      <div className={styles.type}>Type : {security.type}</div>
      <div className={styles.details}>{ReactHtmlParser(security.details)}</div>
    </div>
  )
}
