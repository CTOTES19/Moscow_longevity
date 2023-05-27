import React from 'react';
import { QuastionData } from '../../../data/data'
import './QuastionNumber.css'


const QuastionNumber = ({quastionIndex}) => {

    // console.log(QuastionData)

    return (
        <div className='result'>
           <div className="quiestion__number">
            Вопрос {quastionIndex + 1} из {QuastionData.length}
           </div>    
        </div>
    );
}

export default QuastionNumber;
