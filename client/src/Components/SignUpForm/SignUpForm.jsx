import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv'
import axios from "axios";
import clesed from "../../../src/assets/icons/Cross.svg";
import "./SignUpForm.css";
import {SERVER_URL} from '../../vars'
import { Helmet } from "react-helmet";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  let registrant = localStorage.getItem("registrant");

  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  // const loginRedirect = async () => {
  //   await store.registration(name,surname, email, password)
  //   navigate('/')
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || email === "" || password === "") {
      setMessage("Введите данные!");
      return;
    }

    axios
      .post(`${SERVER_URL}/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        setMessage(response.data.message);
        // clear input values
        setUsername("");
        setEmail("");
        setPassword("");
        setIsRegistered(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      })
      .catch((error) =>
        setMessage(error.response.data.message || error.message)
      );
  };

  return (
    <>
        <Helmet>
      <style>{'body { background-color: #0D5E8B; }'}</style>
      </Helmet>
      <div className={active ? "modal active__modal" : "modal"}>
        <div
          className="modal-content-signup toup"
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/">
            <div className="clesed" onClick={() => setActive(false)}>
              <img src={clesed} alt="clesed" />
            </div>
          </Link>

          <form onSubmit={handleSubmit} className="modal-main">
            <div className="modal-title">Регистрация</div>
            {/* <div className="modal-hintname mt">Имя</div> */}
            {/* <input 
        className='modal-name'
        onChange={e => setName(e.target.value)}
        value={name}
        type="text" 
        placeholder='Ваше имя' />

        <div className="mt">Фамилия</div>
        <input 
        className='modal-name'
        onChange={e => setSurname(e.target.value)}
        value={surname}
        type="text" 
        placeholder='Ваша фамилия' /> */}

            <div className="modal-hintname mt">Имя пользователя</div>
            <input
              className="modal-email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
              maxlength="16"
            />

            <div className="modal-hintemail mt">Email</div>
            <input
              className="modal-email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
            />

            <div className="modal-hintpassword mt">Пароль</div>
            <input
              className="modal-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
            />

            {message && <p className="error">{message}</p>}


            <button className="modal-reg" type="submit">
              Зарегистрироваться
            </button>

            <div className="modal-login">
              У вас уже есть аккаунт? <Link to="/login">Войти</Link>.
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default observer(SignUpForm);
