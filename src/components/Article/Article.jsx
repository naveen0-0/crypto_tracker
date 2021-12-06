import React from 'react'
import styles from './Article.module.css'

export default function Article({ article }) {
  return (
    <a href={article.url} target="_blank" className={styles.article}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.author}>-{article.author.name}</div>
    </a>
  )
}
