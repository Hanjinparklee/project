import Link from "next/link";
import Styles from "../styles/Home.module.css";
import Slide from "../component/Slide"


export default function Home() {
  


  
  return (
    <div className={Styles.main}>
      <div className={Styles.textarea}>
        <h1 className={Styles.text}>hws</h1>
      </div>
      <div className={Styles.midlles}>
<Slide/>
</div>
      
    </div>
  );
}
