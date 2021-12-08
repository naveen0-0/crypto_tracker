import React from 'react'
import styles from './Sidebar.module.css'
import main from '../../images/main.png'
import dashboardimg from '../../images/dashboard.png'
import barimg from '../../images/bar.png'
import graphimg from '../../images/graph.png'
import walletimg from '../../images/wallet.png'
import settingimg from '../../images/settings.svg'
import closeimg from '../../images/close.png'

export default function Sidebar({ index, setIndex, setSidebarOpen, sidebarOpen }) {
  return (
    <div className={styles.sidebar}>

      <div className={styles.title}>
        <div className={styles.logo}>
          <div>
            <img src={main} alt="MainImg" className={styles.mainimg}/>
          </div>
          <div className={styles.titletext}>
            Myst
          </div>
        </div>


        <div className={styles.close} onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={closeimg} alt="Close" className={styles.close_img}/>
        </div>
      </div>

      <div className={styles.sidebarlinks}>

        <div className={styles.sidebarlink} >
          <div>
            <img src={dashboardimg} alt="Dashboard"/>
          </div>
          <div className={index === 0 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>setIndex(0)}>
            Dashboard
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={barimg} alt="Market Cap"/>
          </div>
          <div className={index === 1 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>setIndex(1)}>
            MarketCap
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={graphimg} alt="Compare"/>
          </div>
          <div className={index === 2 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>setIndex(2)}>
            Compare
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={walletimg} alt="News"/>
          </div>
          <div className={index === 3 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>setIndex(3)}>
            News
          </div>
        </div>


        <div className={styles.sidebarlink} >
          <div>
            <img src={settingimg} alt="Settings"/>
          </div>
          <div className={index === 4 ? styles.sidebarlinktextactive : styles.sidebarlinktext} onClick={()=>setIndex(4)}>
            Settings
          </div>
        </div>


      </div>
    </div>
  )
}
