import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from "../styles/slide.module.css"
import React, { Component } from "react";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div classname={Styles.body}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          <h3 className={Styles.text}>1</h3>
            <h3>
            <img src="images/vercel.jpg"></img>
            </h3>
          </div>
          <div>
            <h3 className={Styles.text}>2</h3>
            <h3>
            <img src="images/vercel.jpg"></img>
            </h3>
          </div>
          <div>
          <h3 className={Styles.text}>3</h3>
            <h3><img src="images/vercel.jpg"></img></h3>
          </div>
          <div>
          <h3 className={Styles.text}>4</h3>
            <h3><img src="images/jbu.jpg"></img></h3>
          </div>
          <div>
          <h3 className={Styles.text}>5</h3>
            <h3><img src="images/vercel.jpg"></img></h3>
          </div>
          <div>
          <h3 className={Styles.text}>6</h3>
            <h3><img src="images/vercel.jpg"></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}