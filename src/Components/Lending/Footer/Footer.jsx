import React from 'react';

import phone from '../../../assets/icons/phone.svg'
import email from '../../../assets/icons/Email.svg'
import addres from '../../../assets/icons/Addres.svg'
import footerGrand from '../../../assets/img/footer.png'
import './Footer.css'



const Footer = () => {

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer--wrapper">
                    <div className="footer-wrapper-flex">
                        <div className="footer-wrapper-flex-contacts">
                            <div className="footer-wrapper-flex-contacts-title">Контакты</div>

                            <div className="footer-wrapper-flex-contacts-block ">
                                <div className="footer-wrapper-flex-contacts-block-img">
                                    <img src={phone} alt="phone" />
                                </div>
                                <a className="footer-wrapper-flex-contacts-block-phone" href="tel:+79999999999">+7 999 999 99 99</a>
                            </div>
                            <div className="footer-wrapper-flex-contacts-block">
                            <div className="footer-wrapper-flex-contacts-block-img">
                                    <img src={email} alt="phone" />
                                </div>
                                <a className="footer-wrapper-flex-contacts-block-phone" href="Email@gmail.com">Email@gmail.com</a>
                            </div>
                            <div className="footer-wrapper-flex-contacts-block">
                            <div className="footer-wrapper-flex-contacts-block-img">
                                    <img src={addres} alt="phone" />
                                </div>
                                <a className="footer-wrapper-flex-contacts-block-phone" href="Саввинская наб., 23, стр. 1">Саввинская наб., 23, стр. 1</a>
                            </div>
                        </div>
                        
                        <div className="footer-wrapper-flex-title">Московское долголетие</div> 
                        
                        <div className="footer-wrapper-flex-img">
                            <img src={footerGrand} alt='GrandMaandPa' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
