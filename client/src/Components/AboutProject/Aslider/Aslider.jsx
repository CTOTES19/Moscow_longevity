import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from '../../../assets/icons/slider.svg'
import './Aslider.css'

const Aslider = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false
        };
        return (
          <div className='Aslider'>
            <h1 className='Aslider-title'>Новости проекта</h1>
            <Slider {...settings}>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>
              <div className='Aslider--wrapper'>
                <img src={slider} alt="s" />
                <div className="Aslider--wrapper-text">Около 500 участников «Московского долголетия» выступят на весеннем фестивале</div>
              </div>

            </Slider>
          </div>
        );
}

export default Aslider