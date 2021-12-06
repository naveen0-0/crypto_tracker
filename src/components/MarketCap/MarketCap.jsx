import React,{ useEffect, useState } from 'react'
import styles from './MarketCap.module.css'
// import axios from 'axios'
// import { graphCryptos1 } from '../../utils/cryptos'
// import { AreaChart,XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts'
// import loadinggif from '../../images/loading.gif'
// import { format } from 'date-fns'

export default function MarketCap() {
  // const [ crypto, setCrypto ] = useState('bitcoin')
  // const [ currency, setCurrency ] = useState("usd");
  // const [ noOfDays, setNoOfDays ] = useState(7);
  // const [ data, setData ] = useState([]);
  // const [ loading, setLoading ] = useState(true)



  // const loadData = async ( source ) => {  
  //   setLoading(true) 
  //   try {
  //     let { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${noOfDays}`, { cancelToken: source.token })
  //     let updatedPrices = data.prices.map((price) =>{
  //       return {
  //         date : format(new Date(price[0]),"MMM d"),
  //         price: price[1].toFixed(1)
  //       }
  //     })
  //     setData(updatedPrices);
  //     setLoading(false);
  //   } catch (error) {
  //     if (axios.isCancel(error)) return; setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   let source = axios.CancelToken.source();
  //   loadData(source);
  //   return () => {
  //     source.cancel();
  //   };
  // }, [noOfDays, currency, crypto]);

  // useEffect(() => {
  //   const noOfDays = document.getElementById('noofdays1')
  //   const currency = document.getElementById('currency1')
  //   noOfDays.checked = true;
  //   currency.checked = true;
  // },[])


  return (
    <div className={styles.container}>

      <div className={styles.dashcontainertitle}>
        MarketCap
      </div>
{/* 
      <div className={styles.content}>
        <div className={styles.innercontent}>
          <div className={styles.allcryptos}>
              <select onChange={(e) => setCrypto(e.target.value)} className={styles.select}>
                {graphCryptos1.map((crypto, index) => <option value={crypto} key={index} className={styles.option}>{crypto}</option>)}
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




      {loading? (
        <div className={styles.loadinggif}>
          <img src={loadinggif} alt="Loading" />
        </div>
      ): (
      <div className={styles.graph}>
        <ResponsiveContainer width="99%" aspect={3}>
          <AreaChart data={data} margin={{top:50}} className={styles.innergraph}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f0c814" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f0e114" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" axisLine={false} tickLine={false}/> 
            <YAxis axisLine={false} tickLine={false}/>
            <Tooltip content={<CustomToolTip currency={currency}/>} cursor={false}/>

            <Area type="monotone" dataKey="price" stroke="#ffe600" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>)}

      </div> */}
      
    </div>
  )
}

// function CustomToolTip({ active, payload, label, currency}){
//   if(active){
//     return (
//       <div className={styles.tooltip}>
//         <h4 className={styles.label}>{label}</h4>
//         <p className={styles.value}>
//           {payload[0].value} {currency}
//         </p>
//       </div>
//     )
//   }
//   return null;
// }
