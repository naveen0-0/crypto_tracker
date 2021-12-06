import React,{ useState, useEffect } from 'react'
import styles from './SpecificCrtpto.module.css'
import axios from 'axios'
// import loadinggif from '../../images/loading.gif'
import loadinggif from '../../images/loading.gif'
// import ReactHtmlParser from "react-html-parser";
// import ReactHtmlParser from 'react-html-parser'
// import backimg from '../../images/back.png'
// import Contributor from '../Contributor/Contributor';
// import OrganizationContributor from '../OrganizationContributor/OrganizationContributor';
// import Investor from '../Investor/Investor';
// import Security from '../Security/Security';

export default function SpecificCrtpto({ setSelectedIndex, cryptoName }) {

  // const [ profile, setProfile ] = useState(null);
  // const [ price, setPrice ] = useState(null);
  // const [ loading, setLoading ] = useState(true);
  // const [priceLoading, setPriceLoading] = useState(true)


  // useEffect(() => {
  //   getProfile();
  // },[])
  
  // const getProfile = async () => {
  //   const { data } = await axios.get(`https://data.messari.io/api/v2/assets/${cryptoName}/profile`);
  //   setProfile(data.data);
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   let source = axios.CancelToken.source();
  //   const loadData = () => {
  //       axios.get(`https://data.messari.io/api/v1/assets/${cryptoName}/metrics/market-data`, { cancelToken: source.token })
  //           .then(response => {setPrice(response.data.data) })
  //           .catch(error => {
  //               if (axios.isCancel(error)) {
  //                 } else return
  //           })
  //   };
    
  //   setInterval(() => {
  //     loadData();
  //   },2000)

  //   return () => {
  //     source.cancel();
  //   };
  // }, []);

  

  return (
    <div className={styles.content}>
      Specific Crypto
      {/* <div className={styles.head}>
        <div onClick={() => setSelectedIndex(0)} className={styles.backC}>
          <img src={backimg} alt="Back" className={styles.back}/>
        </div>
        <div className={styles.name}>{cryptoName}</div>
      </div>

      {loading?(
        <div className={styles.loadinggif}>
          <img src={loadinggif} alt="Loading" />
        </div>
      ):(
      <div className={styles.maincontent}>

        <div className={styles.tagline}>{profile.profile.general.overview.tagline}</div>

        <div className={styles.priceimg}>
          <div className={styles.imgC}>
            <img src={`https://cryptoicon-api.vercel.app/api/icon/${profile.symbol.toLowerCase()}`} alt="Crypto Image" className={styles.cryptoimg}/>
          </div>
          <div className={styles.price}>{price && `$${price.market_data.price_usd.toFixed(1)}`}</div>
        </div>

        <div className={styles.project_details}>
          {ReactHtmlParser(profile.profile.general.overview.project_details)}
        </div>

        <div className={styles.official_links}>
          {profile.profile.general.overview.official_links.map((official_link,index) => 
            <div className={styles.official_link} key={index}>
              <a href={official_link.link} className={styles.link} target="_blank">{official_link.name}</a>
            </div>
          )}
        </div>

        <details className={styles.details}>
          <div className={styles.background}>
            {ReactHtmlParser(profile.profile.general.background.background_details)}
          </div>
          <summary className={styles.summary}>
            Background
          </summary>
        </details>

        <details className={styles.details}>
          <div className={styles.background}>
            {ReactHtmlParser(profile.profile.general.regulation.regulatory_details)}
          </div>
          <summary className={styles.summary}>
            Regulation
          </summary>
        </details>

        <details className={styles.details}>
          <div className={styles.background}>
            <details className={styles.details}>
              <div className={styles.backgroundcontri}>
    
                {profile.profile.contributors.individuals.map((individual, index) =><Contributor key={index} contributor={individual}/> )}
              </div>
              <summary className={styles.summary}>
                Individuals
              </summary>
            </details>
            <details className={styles.details}>
              <div className={styles.backgroundcontri}>

                {profile.profile.contributors.organizations.map((organization, index) => <OrganizationContributor key={index} contributor={organization}/> )}
              </div>
              <summary className={styles.summary}>
                Organizations
              </summary>
            </details>
          </div>
          <summary className={styles.summary}>
            Contributors
          </summary>
        </details>



        <details className={styles.details}>
          <div className={styles.backgroundcontri}>
            {profile.profile.investors.organizations.map((investor, index) => <Investor key={index} investor={investor}/> )}
          </div>
          <summary className={styles.summary}>
            Investors
          </summary>
        </details>


        <details className={styles.details}>
          <div className={styles.background}>
            {ReactHtmlParser(profile.profile.technology.overview.technology_details)}
          </div>
          <summary className={styles.summary}>
            Technology
          </summary>
        </details>


        <details className={styles.details}>
          <div className={styles.background}>
            {ReactHtmlParser(profile.profile.governance.governance_details)}
          </div>
          <summary className={styles.summary}>
            Governance
          </summary>
        </details>


        <details className={styles.security_details}>
          <div className={styles.security}>
            {profile.profile.technology.security.known_exploits_and_vulnerabilities.map((security, index) => <Security key={index} security={security}/> )}
          </div>
          <summary className={styles.security_summary}>
            Security Exploits
          </summary>
        </details>

      </div>
      )} */}

    </div>
  )
}
