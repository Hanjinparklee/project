import Link from "next/link";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.textarea}>
        <h1 className={Styles.text}>hws</h1>
      </div>
      <section className={Styles.slideshow}>
        <div className={Styles.slide}>
          <figure>
            <Link href="https://github.com/withsjb">
              <img src="images/img1.jpg"></img>
            </Link>
            <p className={Styles.textb}>Github</p>
          </figure>
          <figure>
            <Link href="/portfolio">
              <img src="images/img2.jpg"></img>
            </Link>
            <p className={Styles.textb}>PotoFiolio</p>
          </figure>
          <figure>
            <Link href="/project">
              <img src="images/festival.jpg"></img>
              <p className={Styles.textb}>Project</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://potofoleo-withsjb.vercel.app">
              <img src="images/vercel.jpg"></img>
              <p className={Styles.textb}>vercel</p>
            </Link>
          </figure>
          <figure>
            <Link href="/mainskile">
              <img src="images/com.jpg"></img>
              <p className={Styles.textb}>MainSkile</p>
            </Link>
          </figure>
          <figure>
            <Link href="https://wapaap.vercel.app/nextshopmain">
              <img src="images/nextshopp.jpg"></img>
              <p className={Styles.textb}>NextShop</p>
            </Link>
          </figure>
        </div>
      </section>
    </div>
  );
}
