import React from 'react'
import './Tweek.css'

const Tweek = () => {

    const filters = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Любой']

  return (
    <div className='tweek'>
        <div className="container">
            <div className="tweek--wrapper">
                <div className="tweek--wrapper-title">День недели</div>
                <div className="tweek--wrapper-filters">
                    {filters.map((item, i) => {
                        return (
                            <label className="tweek--wrapper-filters-block">
                                <input type="checkbox" className='tweek--wrapper-filters-block-input'/>
                                <span className='tweek--wrapper-filters-block-text'>{item}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweek