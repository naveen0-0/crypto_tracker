import React,{ useState } from 'react'
import styles from './Dashboard.module.css'
import MainDash from '../MainDash/MainDash';
import SpecificCrtpto from '../SpecificCrtpto/SpecificCrtpto';

export default function Dashboard() {

  const [ selectedIndex, setSelectedIndex ] = useState(0)
  const [cryptoName, setCryptoName] = useState("")
  const components = [ <MainDash setSelectedIndex={setSelectedIndex} setCryptoName={setCryptoName}/>, <SpecificCrtpto setSelectedIndex={setSelectedIndex} cryptoName={cryptoName}/>]

  return (
    <div className={styles.container}>
      <div className={styles.dashcontainer}>
        <div className={styles.dashcontainertitle}>Dashboard</div>
      </div>
      {/* {components[selectedIndex]} */}
    </div>
  )
}
