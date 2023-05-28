import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';

import Header from "../Lending/Header/Header";
import "./PersonRoom.css";
import axios from "axios";
import userAvatar from "../../assets/icons/user-avatar.png";
import { SERVER_URL } from "../../vars";

const PersonRoom = () => {
  const [username, setUsername] = useState("");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [addressofresidence, setAddressOfResidence] = useState("");
  const [city, setCity] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user data from the server
    axios
      .get(`${SERVER_URL}/api/users/${localStorage.getItem("id")}`)
      .then((response) => {
        const user = response.data;
        setUsername(user.username);
        setFio(user.fio);
        setEmail(user.email);
        setBirth(user.birth);
        setCity(user.city);
        setAddressOfResidence(user.addressofresidence);
        setPhone(user.phone);
        setSex(user.sex);
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("fio", user.fio);
        localStorage.setItem("birth", user.birth);
        localStorage.setItem("sex", user.sex);
        localStorage.setItem("city", user.city);
        localStorage.setItem("addressofresidence", user.addressofresidence);
        localStorage.setItem("phone", user.phone);
      })
      .catch((error) => {
        console.log(`Server: ${error.response.data.message || error.message}`);
        setMessage(error.response.data.message || error.message);
      });
  }, []);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleViewProfile = () => {
    if (password !== "") {
      return;
    }
    setEditing(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.defaults.headers.post["Content-Type"] = "application/json";

    // Валядация пароля
    if (password === "") {
      window.alert("Введите ваш пароль");
      return;
    }

    // Отправка обновленных данных пользователя на сервер
    axios
      .put(`${SERVER_URL}/api/users/${localStorage.getItem("id")}`, {
        username,
        email,
        password,
        fio,
        birth,
        city,
        addressofresidence,
        phone,
        sex,
      })
      .then((response) => {
        setMessage(response.data.message);
        // Обновление данных пользователя в localStorage
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("fio", user.fio);
        localStorage.setItem("birth", user.birth);
        localStorage.setItem("sex", user.sex);
        localStorage.setItem("city", user.city);
        localStorage.setItem("addressofresidence", user.addressofresidence);
        localStorage.setItem("phone", user.phone);
      })
      .catch((error) => {
        setMessage(error.response.data.message || error.message);
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (editing) {
    return (
      <>
        <Header />
        <section className="Private container">
          <div className="private-wrapper">
            <div className="private-title pd">
              <h1>Личный кабинет</h1>
            </div>
            <div className="private-title2 pd">
              <h2>Ваши персональные данные</h2>
            </div>
            <div className="user-profile profile_container">
              <form onSubmit={handleSubmit}>
                <div className="edit-user-profile">
                  <label>
                    Имя пользователя:
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      maxlength="16"
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    ФИО:
                    <input
                      type="text"
                      value={fio}
                      onChange={(e) => setFio(e.target.value)}
                      // maxlength="225"
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Email:
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Password:
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Дата рождения:
                    <input
                      type="text"
                      value={birth}
                      onChange={(e) => setBirth(e.target.value)}
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label onChange={(e) => setSex(e.target.value)}>
                    Пол:
                    <select name="sex" value={sex}>
                      <option value="Мужской">Мужской</option>
                      <option value="Женский">Женский</option>
                      <option value="Не указан">Не указан</option>
                    </select>
                    {/* <input
                      type="text"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    /> */}
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Город:
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Адресс проживания:
                    <input
                      type="text"
                      value={addressofresidence}
                      onChange={(e) => setAddressOfResidence(e.target.value)}
                    />
                  </label>
                </div>
                <div className="edit-user-profile">
                  <label>
                    Телефон:
                    <InputMask
                      mask="+7 (999) 999-99-99"
                      maskChar="_"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* <input
                      type="text"
                      value={phone}
                      // max="130"
                      onChange={(e) => setPhone(e.target.value)}
                    /> */}
                  </label>
                </div>
                <div className="edit-zone-btn">
                  <button
                    className="save-btn profile-btn btn"
                    type="submit"
                    onSubmit={handleViewProfile}
                  >
                    Сохранить
                  </button>
                  <button
                    className="cancel-btn profile-btn btn"
                    type="submit"
                    onClick={handleViewProfile}
                  >
                    Отмена
                  </button>
                </div>
              </form>
              {message && <p className="message">{message}</p>}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <section className="Private container">
          <div className="private-wrapper">
            <div className="private-title pd">
              <h1>Личный кабинет</h1>
            </div>
            <div className="private-title2 pd">
              <h2>Ваши персональные данные</h2>
            </div>
            {/* <div className="private-title3">Ваши персональные данные</div> */}
            <div className="room__data__wrapper">
              <div className="room__data">
                <div className="room__data-name pd">
                  <div className="data-name__index index">
                    Имя пользователя:
                  </div>
                  <div className="data-name__value value">{username}</div>
                </div>
                <div className="room__data-email pd">
                  <div className="data-email__index index">Email:</div>
                  <div className="data-email__value value">{email}</div>
                </div>
                <div className="room__data-surname pd">
                  <div className="data-surname__index index">
                    Дата рождения:
                  </div>
                  <div className="data-surname__value value">{birth}</div>
                </div>
                <div className="room__data-email pd">
                  <div className="data-email__index index">Пол:</div>
                  <div className="data-email__value value">{sex}</div>
                </div>
                <div className="room__data-email pd">
                  <div className="data-email__index index">Город:</div>
                  <div className="data-email__value value">{city}</div>
                </div>
                <div className="room__data-email pd">
                  <div className="data-email__index index">
                    Адресс проживания:
                  </div>
                  <div className="data-email__value value">
                    {addressofresidence}
                  </div>
                </div>
                <div className="room__data-email pd">
                  <div className="data-email__index index">Телефон:</div>
                  <div className="data-email__value value">{phone}</div>
                </div>
                <button onClick={handleEditProfile}>Редактировать</button>
              </div>
              <div className="data__photo">
                <img
                  src={userAvatar}
                  alt="user avatar"
                  className="user-avatar"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default PersonRoom;
