import React from 'react'
import './Tcomponent.css'

const Tcomponent = () => {
  return (
    <div className='tcomp'>
            <div className="tcomp--wrapper">
                <div className="tcomp-wrapper-tags">
                    <div className="tcomp-wrapper-tags-tag">Онлайн</div>
                    <div className="tcomp-wrapper-tags-tag">Группа занимается</div>
                    <div className="tcomp-wrapper-tags-tag">Запись продолжается</div>
                </div>

                <div className="tcomp--wrapper-title">Адаптивная и тонизирующая гимнастика</div>
                <div className="tcomp--wrapper-subtitle">Занятия по изучению физических упражнений для начинающих, позволяющих постепенно привыкнуть к регулярным нагрузкам и устранить болевые ощущения от занятий спортом.</div>

                <div className="tcomp--wrapper-group">Группа <span className='tcomp--wrapper-group-span'>G-02077424</span></div>
                <div className="tcomp--wrapper-times">
                    <div className="tcomp--wrapper-times-time">Вт 12:00 - 14:00</div>
                    <div className="tcomp--wrapper-times-time">Чт 12:00 - 14:00</div>
                </div>

                <button className='tcomp--wrapper-btn'>Записаться</button>
            </div>
    </div>
  )
}

export default Tcomponent