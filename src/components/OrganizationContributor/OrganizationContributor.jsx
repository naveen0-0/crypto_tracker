import React from 'react'
import styles from './OrganizationContributor.module.css'
import userimg from '../../images/user.png'

export default function OrganizationContributor({ contributor }) {

  const unAvailableImgUrl = "https://pbs.twimg.com/profile_images/1108475207113543680/noedXd8i_400x400.png"
  return (
    <div className={styles.contributor}>

      {contributor.logo !== unAvailableImgUrl?(
        <div className={styles.logo}>
          <img src={contributor.logo} alt="Avatar" className={styles.logo_img}/>
        </div>
      ):(
        <div className={styles.logo}>
          <img src={userimg} alt="Avatar" className={styles.logo_img}/>
        </div>
      )}

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
