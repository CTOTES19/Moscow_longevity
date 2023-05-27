import React from 'react'
import './TimeWork.css'
import Tformat from './Tfotmat/Tformat'
import Troad from './Troad/Troad'
import Tweek from './Tweek/Tweek'
import Tlist from './Tlist/Tlist'

const TimeWork = () => {


  

  return (
    <div className='timework'> 
      <div className="container">
          <div className="timework--wrapper">
              <div className="timework--wrapper-title">Расписание занятий</div>
              <div className="timework--wrapper-content">
                <div className="timework--wrapper-content-filters">
                      <Tformat/>
                      <Troad/>
                      <Tweek/>
                </div>
                <div className="timework--wrapper-content-list">
                  <Tlist/>
                  <Tlist/>
                  <Tlist/>
                  <Tlist/>  
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TimeWork