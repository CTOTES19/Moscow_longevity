import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {SERVER_URL} from '../../vars'
import axios from "axios";
import clesed from "../../../src/assets/icons/Cross.svg";
import "./LoginForm.css";

const LoginForm = () => {
  const [active, setActive] = useState(true);

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post(`${SERVER_URL}/login`, { email, password })
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.data);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("password", response.data.password);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        if (
          error.response.status === 400 &&
          error.response.data === "Request failed with status code 400"
        ) {
          setMessage("Неверные email или пароль");
        } else {
          console.log(error.response.data.message || error.message);
          setMessage("Неверные email или пароль");
        }
      });
  };

  return (
    <div className={active ? "modal active__modal" : "modal"}>
      <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
        <Link to="/">
          <div className="clesed" onClick={() => setActive(false)}>
            <img src={clesed} alt="clesed" />
          </div>
        </Link>


        <form onSubmit={handleSubmit}>
          <div className="modal-title">Вход</div>

          <div className="modal-hintemail-sign mt">Email</div>
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
          <div className="modal-secure">
            Нажимая зарегистрироваться, вы подтверждаете, что ознакомились и
            приняли условия{" "}
            <Link to="/user-agreement" target="_blank">
              Пользовательского соглашения
            </Link>{" "}
            и{" "}
            <Link to="/privacy_policy">
              Уведомление о конфиденциальности пользователя
            </Link>
          </div>

          {/* <button onClick={() => store.login(email, password)}>Логин</button> */}
          <button className="modal-reg" type="submit">
            Войти
          </button>

          <div className="modal-login">
            <p>
              У вас нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(LoginForm);
