import React from 'react'
import pnggrand from '../../../assets/icons/widget.svg'
import './Ahelpwidget.css'
import { Link } from 'react-router-dom'

const Ahelpwidget = () => {
  return (
    <div className='ahelp'>
        <div className="container">
            <div className="ahelp-flex">
                <div className="ahelp-flex-wrapper">
                    <div className="ahelp-flex-title">Поможем подобрать интересные занятия</div>
                    <div className="ahelp-flex-subtitle">Пройдите тест и узнайте, какие направления подходят именно вам</div>
                    <Link to={'/quizze'}>
                    <button className="ahelp-flex-btn">Подобрать занятия</button>
                    </Link>
                </div>
                <div className="ahelp-img">
                    <img src={pnggrand} alt="Grand" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ahelpwidget