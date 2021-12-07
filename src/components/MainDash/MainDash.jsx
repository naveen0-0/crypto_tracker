import React,{ useState, useEffect } from 'react'
import styles from './MainDash.module.css'
import axios from 'axios'
import loadinggif from '../../images/loading.gif'


export default function MainDash({ setSelectedIndex, setCryptoName }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    let source = axios.CancelToken.source();
    const loadData = () => {
        axios.get(`https://data.messari.io/api/v2/assets?fields=slug,metrics/market_data/price_usd`, { cancelToken: source.token })
            .then(response => {setCoins(response.data.data);setLoading(false); })
            .catch(error => {
                if (axios.isCancel(error)) {
                  } else {
                    setLoading(false);
                  }
            })
    };
    
    setInterval(() => {
      loadData();
    },10000)

    return () => {
      source.cancel();
    };
  }, []);

  return (
      <div className={styles.content}>
      {loading?(
        <div className={styles.loadinggif}>
          <img src={loadinggif} alt="Loading" />
        </div>
      ):(
        <div className={styles.coins}>
          {coins.map((coin, index) => 
          <div className={styles.coin} key={index} onClick={() =>{
            setSelectedIndex(1);
            setCryptoName(coin.slug)
          }}>
            <div className={styles.name}>{coin.slug.toUpperCase()}</div>
            <div className={styles.price}> <span>$</span>{coin.metrics.market_data.price_usd.toFixed(1)}</div>
          </div>)}
        </div>
      )}

    </div>
  )
}
