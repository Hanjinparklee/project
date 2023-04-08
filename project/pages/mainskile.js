import React from "react";
import Layout from "../component/Layout";
import Styles from "../styles/mainskile.module.css";

export default function ad() {
  return (
    <Layout>
      <div className={Styles.main}>
        <div className={Styles.write}>
          <div className={Styles.lang}>
            <h1 className={Styles.title}>사용 가능한 언어</h1>
            <p className={Styles.text}>
              2학년 진로를 웹으로 정한 이후 계속 사용하고 있는 기본적인
              언어입니다.
            </p>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/htmlimg.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/jsimg.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/cssimg.png"></img>
            </div>
          </div>
          <br />
          <p>
            ------------------------------------------------------------------------------------------------------------------------
          </p>
          <div className={Styles.aboutme}>
            <h1 className={Styles.title}>배우고 있는 요소들</h1>
            <p className={Styles.text}>
              3학년 2학기때 처음 접한 이후 공부중인 요소들입니다 대부분 2학기때
              처음 접하였습니다.
            </p>
            <br />
            <div className={Styles.imgboxs}>
              <img className="img" src="images/react.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/nextjs.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/tailwind.png"></img>
            </div>
          </div>
          <p>
            ------------------------------------------------------------------------------------------------------------------------
          </p>
          <div className={Styles.aboutme}>
            <h1 className={Styles.title}>추후 공부 예정</h1>
            <p className={Styles.text}>
              방학 및 4학년때 졸업작품을 끝낸 이후 공부할 예정입니다
            </p>
            <br />
            <div className={Styles.imgboxs}>
              <img className="img" src="images/ts.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/webpack.png"></img>
            </div>
            <div className={Styles.imgboxs}>
              <img className="img" src="images/jung.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
