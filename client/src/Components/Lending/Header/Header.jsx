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
  const handleClick = () => {
    window.location.href = "/";
  };

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
          <div onClick={handleBurger} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
          </div>
        

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
                <Link to="/">
                  <div className="nav-down-select" onClick={logout}>
                    Выйти
                  </div>
                </Link>
              </>
            )}
          </div>

          {/* <button className="nav-btn" onClick={showNavbar}>
							<FaBars />
						</button> */}
        </div>

        <div
          className={
            active === true
              ? "active-burger-modal burger-modal "
              : "burger-modal"
          }
        >
          <div className="burger-modal-wrapper">
            <div onClick={() => setActive(false)} className="fa-bur">
              <FaTimes />
            </div>
            <div className="burger-modal-block">
              <NavLink to="/quizze" className="burger-modal-item">
                О проекте
              </NavLink>
              <NavLink to="/courses" className="burger-modal-item">
                Расписание занятий
              </NavLink>
              <a href="/explore" className="burger-modal-item">
                Как стать участником
              </a>
              <a href="/#contacts" className="burger-modal-item">
                Центры московского долголетия
              </a>
              <a href="/#contacts" className="burger-modal-item">
                Система активного долголетия
              </a>
              {/* <NavLink to='/Room' className="burger-modal-item">Личный кабинет</NavLink> */}
              <div className="LK">

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
                            className="burger-title-lk "
                          >
                            Личный кабинет
                          </Link>
                          <Link to="/">
                            <div className="burger-lk-btn" onClick={logout}>
                              Выйти
                            </div>
                          </Link>
                        </>
                      )}
                 
                </div>

              </div>
            </div>
          </div>
        </div>


        
    </header>
  );
};
export default Header;
