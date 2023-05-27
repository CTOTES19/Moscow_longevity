import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Quizze from '../Quizze/Quizze'
import Lending from '../Lending/Lending'
import PersonRoom from '../PersonRoom/PersonRoom'
import './App.css'

const App = ()  => {

      return (
        <Routes>
            <Route path='/' element={<Lending/>}/>
            <Route path='/Room' element={<PersonRoom/>}/>
            <Route path='/quizze' element={<Quizze/>}/>
        </Routes>
      )
  
}

export default App;
