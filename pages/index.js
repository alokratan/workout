import Head from 'next/head';
import  style from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'next/link'


export default function Home() {
  return (<>    <div>
      <Head>
        <title>Runner Workout</title>
        <meta name="description" content="Runner's Workout" />
      </Head>
         </div>
         
<div className={style.navbar}>
<div className={style.logo}>
<p>HF</p>
</div>
<div className={style.menu}>
  <ul>
    <li>
      <Link href='/'><i className="bi bi-camera-reels-fill"></i>LIVE</Link></li>
    <li><Link href='/'><i className="bi bi-postcard-fill"></i>MEMBERSHIP</Link></li>
    <li><Link href='/'><i className="bi bi-clipboard-data-fill"></i>PLANS</Link></li>
    <li><Link href='/'><i className="bi bi-grid-fill"></i>MORE</Link></li>
  </ul>
</div>
<div className={style.login}><p><i className="bi bi-person-fill"></i>Login</p></div>
</div>
<div className={style.workout}>
</div>

<div className={style.containers}>
<h1>
  Runners Workout
</h1>
<div className={style.slider}>
<div className={style.strength}><h5>Strength</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
<div className={style.mobility}><h5>Mobility</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
<div className={style.drills}><h5>Drills</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
</div>
</div>

</>


  )
}
