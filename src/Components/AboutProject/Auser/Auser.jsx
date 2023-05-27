import React from 'react'
import './Auser.css'




const Auser = () => {
  return (
    <section className='user'>
        <div className="container">
            <div className="user--wrapper">
                <div className="user--wrapper-title">Как стать участником</div>
                <div className="user--wrapper-flex">
                    <div className="user--wrapper-flex-block">
                        <div className="user--wrapper-flex-block-number">1</div>
                        <div className="user--wrapper-flex-block-title">Получить информацию</div>
                        <div className="user--wrapper-flex-block-subtitle">Выбирите расписание по душе в расписании</div>
                    </div>
                    <div className="user--wrapper-flex-line"></div>
                    <div className="user--wrapper-flex-block">
                        <div className="user--wrapper-flex-block-number">2</div>
                        <div className="user--wrapper-flex-block-title">Получить информацию</div>
                        <div className="user--wrapper-flex-block-subtitle">
                            Подать заявку на участие в проекте можно в центре социального обслуживания населения, офисах госуслуг «Мои документы», а также дистанционно по телефонам ТЦСО и на сайте mos.ru/age.
                        </div>
                    </div>
                    <div className="user--wrapper-flex-line"></div>
                    <div className="user--wrapper-flex-block">
                        <div className="user--wrapper-flex-block-number">3</div>
                        <div className="user--wrapper-flex-block-title">Получить приглашение</div>
                        <div className="user--wrapper-flex-block-subtitle">Когда получите приглашение, приступайте к занятиям</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auser