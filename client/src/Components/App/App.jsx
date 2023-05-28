import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Quizze from "../Quizze/Quizze";
import Lending from "../Lending/Lending";
import PersonRoom from "../PersonRoom/PersonRoom";
import SignUpForm from "../SignUpForm/SignUpForm"
import LoginForm from "../LoginForm/LoginForm"
import "./App.css";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // console.log(store)
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Lending />} />
      <Route path="/quizze" element={<Quizze />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/api/users/:id" element={<PersonRoom />} />
      {/* <Route path="/*" element={<Err404 />} /> */}
    </Routes>

    // <Routes>
    //     <Route path='/' element={<Lending/>}/>
    //     <Route path='/Room' element={<PersonRoom/>}/>
    //     <Route path='/quizze' element={<Quizze/>}/>
    // </Routes>
  );
};

export default App;
