import React from 'react'
import Amain from './Amain/Amain'
import Ahelpwidget from './Ahelpwidget/Ahelpwidget'
import Auser from './Auser/Auser'
import Aslider from './Aslider/Aslider'
import Aphoto from './Aphoto/Aphoto'
import Asliderauto from './Asliderauto/Asliderauto'

const AboutProject = () => {
  return (
    <div className='AboutProject'>
      <Amain/>
      <Asliderauto/>
      <Ahelpwidget/>
      <Auser/>
      <Aslider/>
      <Aphoto/>
    </div>
  )
}

export default AboutProject