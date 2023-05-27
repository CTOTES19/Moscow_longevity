import React from 'react'

import sing from '../../../assets/img/sing.svg'
import dance from '../../../assets/img/dance.svg'
import foto from '../../../assets/img/foto.svg'
import gim from '../../../assets/img/gim.svg'
import plain from '../../../assets/img/plain.svg'
import valik from '../../../assets/img/valik.svg'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Asliderauto.css'


const Asliderauto = () => {



    const slides = [
        {title: 'Гимнастика', foto: gim},
        {title: 'Танцы', foto: dance},
        {title: 'Пение', foto: sing},
        {title: 'Фото, видео', foto: foto},
        {title: 'Интеллектуальные игры', foto: valik},
        {title: 'Путешествия', foto: plain}
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed:2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };


  return (
    <div className='asliderauto'>
        <div className="container">
            <div className="asliderauto--wrapper">
                <div className="asliderauto--wrapper-title">Направления занятий</div>
                <div className="asliderauto--wrapper-slider">
                <Slider {...settings}>
                    {slides.map((item, i) => {
                        return (
                            <div className="asliderauto--wrapper-slider-slide">
                                <div className="asliderauto--wrapper-slider-slide-img">
                                    <img src={item.foto} alt="foto" />
                                </div>
                                <div className="asliderauto--wrapper-slider-slide-title">{item.title}</div>
                            </div>
                        )
                    })}
                </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Asliderauto