import React from 'react'
import ld1 from '../../../assets/img/1slide/ld1.svg'
import lt1 from '../../../assets/img/1slide/lt1.svg'
import rd1 from '../../../assets/img/1slide/rd1.svg'
import rt1 from '../../../assets/img/1slide/rt1.svg'

import ld2 from '../../../assets/img/2slide/ld2.svg'
import lt2 from '../../../assets/img/2slide/lt2.svg'
import rd2 from '../../../assets/img/2slide/rd2.svg'
import rt2 from '../../../assets/img/2slide/rt2.svg'

import ld3 from '../../../assets/img/3slide/ld3.svg'
import lt3 from '../../../assets/img/3slide/lt3.svg'
import rd3 from '../../../assets/img/3slide/rd3.svg'
import rt3 from '../../../assets/img/3slide/rt3.svg'

import './Aphoto.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aphoto = () => {

    const slides = 
        [
            {
                left: [
                    {title: 'Гимнастика', foto: lt1},
                    {title: 'Танцы', foto: ld1},
                ],
                rigth: [
                    {title: 'Пение', foto: rt1},
                    {title: 'Фото, видео', foto: rd1},
                ]
            },
            {
                left: [
                    {title: 'Гимнастика', foto: lt2},
                    {title: 'Танцы', foto: ld2},
                ],
                rigth: [
                    {title: 'Пение', foto: rt2},
                    {title: 'Фото, видео', foto: rd2},
                ]
            },
            {
                left: [
                    {title: 'Гимнастика', foto: lt3},
                    {title: 'Танцы', foto: ld3},
                ],
                rigth: [
                    {title: 'Пение', foto: rt3},
                    {title: 'Фото, видео', foto: rd3},
                ]
            },
        ]
       

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 100,
        arrows: true
      };


  return (
    <section className='aphoto'>
        <div className="container">
            <div className="aphoto--title">Фотогалерея</div>

            <Slider {...settings}>
                    {slides.map((item, i) => {
                        return (
                        <div className="aphoto--wrapper">
                            <div className="aphoto--wrapper-flex">
                                {item.left.map(item => {
                                    return (
                                        <div className="aphoto--block">
                                            <img src={item.foto} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="aphoto--wrapper-flex">
                                {item.rigth.map(item => {
                                    return (
                                        <div className="aphoto--block">
                                            <img src={item.foto} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            
                        </div>
                        )
                        
                    })}
            </Slider>
            
        </div>
    </section>
  )
}

export default Aphoto