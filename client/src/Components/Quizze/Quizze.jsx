import { useEffect } from 'react';
import { React, useState } from 'react';
import {Helmet} from 'react-helmet';
import { QuastionData, Proffesion  } from '../../data/data';
import Button from '../../UI/Button';
import Header from '../Lending/Header/Header';
import { map } from './EmptyArray';
import QuastionNumber from './QuastionNumber/QuastionNumber';
import QuastionView from './QuastionView/QuastionView';

import './Quizze.css';
// import './Responsive.css';
import Result from './Result/Result';
import { useNavigate } from 'react-router-dom';



let quastionIndex = 0;

const Quizze = () => {
  
  useEffect(() => {
    researchData()
  }, []);

  const [valueInput, setValueInput] = useState('')
  const [idInput, setIdInput] = useState(null)
  const [checked, setChecked] = useState(false)
  const [result, setResult] = useState(true)
  const [resultButton, setResultButton] = useState(false)
  const [quastion, setQuastion] = useState({
      quastion: '',
      answer: [],
      value: [],
      type: '',
    });

    const researchData = () => {
      setQuastion({
        quastion: QuastionData[quastionIndex]['quastion'],
        answer: QuastionData[quastionIndex]['answer'],
        value: QuastionData[quastionIndex]['total'],
        type: QuastionData[quastionIndex]['type']
      })
    }

  const handelNext = () => {
    if (quastionIndex !== QuastionData.length - 1) {
      quastionIndex++;
      researchData()
      setIdInput(null)
      checkAnswer(Proffesion)
      // setChecked(-1)
    } else {
      setResult(false)
      setResultButton(true)
    }
  }


  const changeCheckbox = (e) => {
    console.log(e.target.checked)
    
    setIdInput(e.target.id)
    console.log(idInput)
    
  }

  let sss = []
  const changeRadio = (e, index) => {
    setIdInput(Number(e.target.id))
    const sss3 = e.target.value
    setChecked(index)
    sss.push(sss3)
    setValueInput(sss)
    console.log(sss)
  };


  const navigate = useNavigate();

  const refreshWindow = (e) => {
    navigate("/");
    window.location.reload()
  }


  const checkAnswer = (data) => {
    if (valueInput) {
        data.forEach(item => {
            if (valueInput.indexOf(item.value) >= 0) {
                item.score++  
                console.log(data)
            }
        });

    }

}

  
  return (
    <>
    <Header />
      <div className="quizzmain toup">
    <Helmet>
      <style>{'body { background-color: #CCDDEE; }'}</style>
    </Helmet>

  <div className="quizzmain__container">
    <div className="block__wrapper toup">
        <div className="block">

        {result ? <>
          <QuastionView  
          checked={checked}
          valueInput={valueInput}
        idInput={idInput} 
        changeRadio={changeRadio} 
        data={quastion}/>
        <QuastionNumber quastionIndex={quastionIndex}/>
        </>
        : <Result data={Proffesion}/> }

        <div className="btns toup">
        
          { resultButton ? <Button
            onClick={refreshWindow}
          >
            Посмотреть занятия
          </Button> : <Button
          onClick={handelNext} 
          disabled={idInput === null ? true : false}
          >
          Ответить
          </Button>}
          
        </div>
      </div>
    </div>
  </div>
  </div>
    </>
  );
  }


export default Quizze;

