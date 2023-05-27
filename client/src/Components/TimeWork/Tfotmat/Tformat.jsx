import React from 'react'
import './Tformat.css'


const Tformat = () => {

    const btns = ['Онлайн', 'Очные']

  return (
    <div className='tformat'>
        <div className="container">
            <div className="tformat--wrapper">
                <div className="tformat-wrapper-title">Формат</div>
                <div className="tformat-wrapper-btns">
                    {btns.map((item, i) => {
                        return (
                            <button className='tformat-wrapper-btns-bt'>{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tformat