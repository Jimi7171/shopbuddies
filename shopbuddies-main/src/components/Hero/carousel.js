import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./styles.js";
import n from './n.jpg'
import b from './b.png'
import s from './s.png'
import c from './c.png'
import hl from './hl.png'
import h from './h.png'

const carousel = () => {
    const settings = {
        infinite: true,
        dots: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,       
      };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div>
                    <img src={n} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
                <div>
                    <img src={b} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
                <div>
                    <img src={hl} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
                <div>
                    <img src={c} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
                <div>
                    <img src={s} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
                <div>
                    <img src={h} alt="" style={{width: '100%', height:'100%'}}/>
                </div>
            </Slider>
        </div>
    )
}

export default carousel;