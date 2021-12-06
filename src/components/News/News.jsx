import React,{ useEffect, useState } from 'react'
import styles from './News.module.css'
import axios from 'axios'
import { cryptos } from '../../utils/cryptos'
import Article from '../Article/Article'
import loadinggif from '../../images/loading.gif'


export default function Wallet() {
  // const [newsSection, setNewsSection] = useState("");
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchArticles();
  // },[newsSection])

  // const fetchArticles = async () => {
  //   setLoading(true)
  //   if(newsSection===""){
  //     let { data } = await axios.get("https://data.messari.io/api/v1/news")
  //     setLoading(false)
  //     if(data.data){
  //       setArticles(data.data)
  //     }else{
  //       setArticles([])
  //     }
  //   }else{
  //     let { data } = await axios.get(`https://data.messari.io/api/v1/news/${newsSection}`)
  //     setLoading(false)
  //     if(data.data){
  //       setArticles(data.data)
  //     }else{
  //       setArticles([])
  //     }
  //   }
  // }

  return (
    <div className={styles.newscontainer}>
      <div className={styles.head}>
        <div className={styles.news}>
          News
        </div>
        <div className={styles.custom_select}>
          <select onChange={(e) => setNewsSection(e.target.value)} className={styles.select}>
            <option value="" className={styles.option}>all</option>
            {cryptos.map((crypto, index) => <option value={crypto} key={index} className={styles.option}>{crypto}</option>)}
          </select>
        </div>
      </div>

      {/* <div className={styles.content}>
        {loading?(
          <div className={styles.loadinggif}>
            <img src={loadinggif} alt="Loading" />
          </div>
        ):(
          <div className={styles.articlesC}>
            <div className={styles.readmore}>Click on the article to read more</div>
            {articles.length === 0? null:(
            <div className={styles.articles}>
              {articles.map((article, index) => <Article key={index} article={article}/>)}
            </div>
            )}
          </div>
        )}
      </div> */}

    </div>
  )
}
