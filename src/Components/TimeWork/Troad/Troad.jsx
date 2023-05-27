import React from 'react'
import './Troad.css'

const Troad = () => {

    const filters = ['Гимнастика', 'Домоводство', 'Здорово жить', 'Иностранные языки', 'Интеллектуальные игры', 'Киберспорт']
  return (
    <div className='troad'>
        <div className="container">
            <div className="troad--wrapper">
                <div className="troad--wrapper-title">Направление</div>
                <div className="troad--wrapper-filters">
                    {filters.map((item, i) => {
                        return (
                            <label className="troad--wrapper-filters-block">
                                <input type="checkbox" className='troad--wrapper-filters-block-input'/>
                                <span className='troad--wrapper-filters-block-text'>{item}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Troad