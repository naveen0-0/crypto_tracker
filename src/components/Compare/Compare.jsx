import React, { useState, useEffect } from 'react'
import styles from './Compare.module.css'
import { graphCryptos1, graphCryptos2 } from '../../utils/cryptos'
import axios from 'axios'
import { AreaChart,XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts'
import loadinggif from '../../images/loading.gif'
import { format } from 'date-fns'

export default function Compare() {
  const [ crypto1, setCrypto1 ] = useState('bitcoin')
  const [ crypto2, setCrypto2 ] = useState('ethereum')
  const [ currency, setCurrency ] = useState("usd");
  const [ noOfDays, setNoOfDays ] = useState(7);
  const [ data1, setData1 ] = useState([]);
  const [ data2, setData2 ] = useState([]);
  const [ loading1, setLoading1 ] = useState(true)
  const [ loading2, setLoading2 ] = useState(true);



  const loadData1 = async ( source ) => {  
    setLoading1(true) 
    try {
      let { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto1}/market_chart?vs_currency=${currency}&days=${noOfDays}`, { cancelToken: source.token })
      let updatedPrices = data.prices.map((price) =>{
        return {
          date : format(new Date(price[0]),"MMM d"),
          price: price[1].toFixed(1)
        }
      })
      setData1(updatedPrices);
      setLoading1(false);
    } catch (error) {
      if (axios.isCancel(error)) return; setLoading1(false);
    }
  };

  const loadData2 = async ( source ) => {  
    setLoading2(true) 
    try {
      let { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto2}/market_chart?vs_currency=${currency}&days=${noOfDays}`, { cancelToken: source.token })
      let updatedPrices = data.prices.map((price) =>{
        return {
          date : format(new Date(price[0]),"MMM d"),
          price: price[1].toFixed(1)
        }
      })
      setData2(updatedPrices);
      setLoading2(false);
    } catch (error) {
      if (axios.isCancel(error)) return; setLoading2(false);
    }
  };


  useEffect(() => {
    let source = axios.CancelToken.source();
    loadData1(source);
    return () => {
      source.cancel();
    };
  }, [noOfDays, currency, crypto1]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    loadData2(source);
    return () => {
      source.cancel();
    };
  }, [noOfDays, currency, crypto2]);

  useEffect(() => {
    const noOfDays = document.getElementById('noofdays1')
    const currency = document.getElementById('currency1')
    noOfDays.checked = true;
    currency.checked = true;
  },[])


  return (
    <div className={styles.container}>

      <div className={styles.dashcontainertitle}>
        Compare
      </div>

      <div className={styles.content}>

        <div className={styles.innercontent}>
          <div className={styles.allcryptos}>
              <select onChange={(e) => setCrypto1(e.target.value)} className={styles.select}>
                {graphCryptos1.map((crypto, index) => <option value={crypto} key={index} className={styles.option}>{crypto}</option>)}
              </select>
          </div>

          <div className={styles.allcryptos}>
              <select onChange={(e) => setCrypto2(e.target.value)} className={styles.select}>
                {graphCryptos2.map((crypto, index) => <option value={crypto} key={index} className={styles.option}>{crypto}</option>)}
              </select>
          </div>

          <div className={styles.radio}>
            <input type="radio" className={styles.radio_input} value={7} name='noofdays' id="noofdays1" onChange={e => setNoOfDays(e.target.value)}/>
            <label htmlFor="noofdays1" className={styles.radio_label}>7 Days</label>
            
            <input type="radio" className={styles.radio_input} value={30} name='noofdays' id="noofdays2" onChange={e => setNoOfDays(e.target.value)}/>
            <label htmlFor="noofdays2" className={styles.radio_label}>30 Days</label>

            <input type="radio" className={styles.radio_input} value={365} name='noofdays' id="noofdays3" onChange={e => setNoOfDays(e.target.value)}/>
            <label htmlFor="noofdays3" className={styles.radio_label}>365 Days</label>
          </div>


          <div className={styles.radio}>
            <input type="radio" className={styles.radio_input} value="usd" name='currency' id="currency1" onChange={e => setCurrency(e.target.value)}/>
            <label htmlFor="currency1" className={styles.radio_label}>USD</label>
            
            <input type="radio" className={styles.radio_input} value="eur" name='currency' id="currency2" onChange={e => setCurrency(e.target.value)}/>
            <label htmlFor="currency2" className={styles.radio_label}>EUR</label>

            <input type="radio" className={styles.radio_input} value="inr" name='currency' id="currency3" onChange={e => setCurrency(e.target.value)}/>
            <label htmlFor="currency3" className={styles.radio_label}>INR</label>
          </div>
        </div>


      {loading1? (
        <div className={styles.loadinggif}>
          <img src={loadinggif} alt="Loading" />
        </div>
      ): (
      <div className={styles.graph}>

        <ResponsiveContainer width="99%" height={400}>
          <AreaChart data={data1} margin={{top:50}} className={styles.innergraph}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f0c814" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f0e114" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false}
            /> 
            <YAxis axisLine={false} tickLine={false} tickCount={6}/>
            <Tooltip content={<CustomToolTip currency={currency}/>} cursor={false}/>

            <Area type="monotone" dataKey="price" stroke="#ffe600" fillOpacity={1} fill="url(#colorPv)"/>
          </AreaChart>
        </ResponsiveContainer>
        <div className={styles.crypto1}>{crypto1.toUpperCase()}</div>
      </div>)}


      {loading2? (
        <div className={styles.loadinggif}>
          <img src={loadinggif} alt="Loading" />
        </div>
      ): (
      <div className={styles.graph}>

        <ResponsiveContainer width="99%" height={400}>
          <AreaChart data={data2} margin={{top:50}} className={styles.innergraph}>
            <defs>
              <linearGradient id="colorPq" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f01431" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f01431" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false}
            /> 
            <YAxis axisLine={false} tickLine={false} tickCount={6}/>
            <Tooltip content={<CustomToolTip currency={currency}/>} cursor={false}/>

            <Area type="monotone" dataKey="price" stroke="#f01431" fillOpacity={1} fill="url(#colorPq)"/>
          </AreaChart>
        </ResponsiveContainer>
        <div className={styles.crypto1}>{crypto2.toUpperCase()}</div>
      </div>)}

      </div>
    </div>
  )
}

function CustomToolTip({ active, payload, label, currency}){
  if(active){
    return (
      <div className={styles.tooltip}>
        <h4 className={styles.label}>{label}</h4>
        <p className={styles.value}>
          {payload[0].value} {currency}
        </p>
      </div>
    )
  }
  return null;
}

