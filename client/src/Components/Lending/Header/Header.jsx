import React, { Component, FC, useEffect, useState, useRef } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { SERVER_URL } from "../../../vars";
import { FaBars, FaTimes } from "react-icons/fa";
import usere from "../../../assets/icons/User.svg";

import "./Header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const username = localStorage.getItem("username");
  // Profile
  const id = localStorage.getItem("id");
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");

  //   const { store } = useEffect(Context);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleBurger = () => {
    setActive(!active);
  };

  function handleNavBtnClick(el) {
    el.classList.toggle("nav-btn__active");
  }

  // logout
  function logout() {
    localStorage.removeItem("registrant");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("patronymic");
    localStorage.removeItem("age");
    localStorage.removeItem("id");
    window.location.href = "/login";
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${SERVER_URL}/api/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header--wrapper">
          <nav className="header--nav" ref={navRef}>
            <Link href="/#about" className="header--link">
              О проекте
            </Link>
            <Link href="/#" className="header--link">
              Занятия
            </Link>
            <Link href="/#" className="header--link">
              Как участвовать?
            </Link>
            <Link href="/#" className="header--link">
              Новости
            </Link>
            <Link href="/#" className="header--link">
              Контакты
            </Link>
            <Link href="/#" className="header--link">
              Галерея
            </Link>
            {/* <button
								className="nav-btn nav-close-btn"
								onClick={showNavbar}>
								<FaTimes />
							</button> */}
          </nav>
          <div className="header--wrapper-person">
            {!username && (
              <NavLink to="/login">
                <button className="nav-btn">Войти</button>
              </NavLink>
            )}

            {username && (
              <>
                <img src={usere} alt="person" />
                <Link
                  to={`/api/users/${id}`}
                  className="header--wrapper-person-link"
                >
                  Личный кабинет
                </Link>
                <NavLink to="/">
                  <div className="nav-down-select" onClick={logout}>
                    Выйти
                  </div>
                </NavLink>
              </>
            )}
          </div>

          {/* <button className="nav-btn" onClick={showNavbar}>
							<FaBars />
						</button> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
