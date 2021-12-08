import React, { useState } from 'react'
import styles from './HomePage.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import MarketCap from '../MarketCap/MarketCap'
import Compare from '../Compare/Compare'
import News from '../News/News'
import Settings from '../Settings/Settings'
import hamburgerimg from '../../images/hamburger.png'

export default function HomePage() {
  let components = [<Dashboard/>,<MarketCap/>,<Compare/>,<News/>,<Settings/>]
  
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className={styles.main}>
      <div className={styles.burger} onClick={() => console.log("Ham Burger Image")}>
        <img src={hamburgerimg} alt="Hamburger" />
      </div>
      <div className={styles.sidebarcontainer}>
        <Sidebar index={selectedIndex} setIndex={setSelectedIndex}/>
      </div>
      <div className={styles.component}>
        {components[selectedIndex]}
      </div>
    </div>
  )
}
