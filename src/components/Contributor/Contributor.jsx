import React from 'react'
import styles from './Contributor.module.css'
import userimg from '../../images/user.png'

export default function Contributor({ contributor}) {
  return (
    <div className={styles.contributor}>

      {contributor.avatar_url?(
        <div className={styles.avatar_url}>
          <img src={contributor.avatar_url} alt="Avatar" className={styles.avatar_img}/>
        </div>
      ):(
        <div className={styles.avatar_url}>
          <img src={userimg} alt="Avatar" className={styles.avatar_img}/>
        </div>
      )}
      <div className={styles.name}>
        {contributor.first_name}  {contributor.last_name}
      </div>
      <div className={styles.title}>
        {contributor.title}
      </div>
    </div>
  )
}
