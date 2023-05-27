import React, {Component} from 'react'
import logo from '../../../assets/icons/Logo.svg'
import grand from '../../../assets/img/main.png'
import './Main.css'

const Main = () => {

    return (
        <section className="main">
            <div className="container">
                <div className="main--wrapper">
                    <div className="main--description">
                        <div className="main--description-photo">
                            <img src={logo} alt="MSC" />
                        </div>
                        <div className="main--description-title">
                        «Московское <br/> долголетие»
                        </div>
                        <div className="main--description-subtitle">
                        Проект Мэра Москвы для активных москвичей старшего поколения
                        </div>
                    </div>
                    <div className="main--img">
                        <img src={grand} alt="Grands" />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Main;