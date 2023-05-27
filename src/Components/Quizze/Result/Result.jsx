import React from 'react';
import {map} from '../EmptyArray'
import './Result.css'



const Result = ({data}) => {

    return (
        <>
        <div className="testproiden">Тест пройден</div>
        <div className="resic">
            Теперь занятия будут подбираться по вашим интересам
        </div>
        </>
    )


    //   return (
    //     <div className='result toup'>
    //         <div className="result__title">Ваши результаты</div>
    //         <div className="result__block">

    //         {data.map((item, i) => {
                
    //             let resultName = item.name,
    //                 resultScore = item.score,
    //                 resultUrl = item.url

    //             let totaliti = Math.floor(100 * resultScore / map[i + 1] )

    //             return (
                    
    //                     <>
    //                     <a href={resultUrl} className='result__answer toup'>{resultName}</a>
    //                     <span className='result__score toup'>{totaliti}%</span>
    //                     </>
                    
    //             );
    //         })}
    //         </div>
    //     </div>
    //   )  
}

export default Result;
