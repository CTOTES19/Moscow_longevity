import React, { useState } from 'react'
import './Filters.css'
import AboutProject from '../AboutProject/AboutProject'
import TimeWork from '../TimeWork/TimeWork'


const Filters = () => {

    const [currentTabm, setCurrentTab] = useState('1')

    const buttons = [
        {
        id: 1, 
        title: 'О проекте'
        }, 
        {
        id: 2, 
        title: 'Расписание занятий'   
        },
        {
        id: 3, 
        title: 'Как стать участником'
        },
        {
        id: 4, 
        title: 'Центры московского долголетия'
        },
        {
        id: 5, 
        title: 'Система активного долголетия'
        }
    ]

    const handleClick = (e) => {
        setCurrentTab(e.target.id)
        console.log(currentTabm);
    }   


  return (
    <div className='filters'>
        <div className="container">
            <div className='filters--wrapper'>
                {buttons.map(item => {
                    return (
                        <button 
                        id={item.id} 
                        className='filters--button'
                        // disabled={currentTabm === item.id} 
                        onClick={handleClick}
                        >
                            {item.title}
                        </button>
                    )
                })}
            </div>

            <div className="filters--content">
                {currentTabm === '1' && <AboutProject/>} 
                {currentTabm === '2' && <TimeWork/>}
                {currentTabm === '3' && 'Покачто тут информация нету'}
                {currentTabm === '4' && 'Покачто тут информация нету'}
                {currentTabm === '5' && 'Покачто тут информация нету'}
            {/* {showComponent(currentTabm)} */}
            </div>  

        </div>
    </div>
  )
}

export default Filters