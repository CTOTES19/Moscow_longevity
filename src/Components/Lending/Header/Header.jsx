import React, { Component, FC, useContext, useState, useRef } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import user from '../../../assets/icons/User.svg'

import "./Header.css";

const Header = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
			<header className="header">
				<div className="container">
					<div className="header--wrapper">
						<nav className="header--nav" ref={navRef}>
							<Link href="/#" className="header--link">О проекте</Link>
							<Link href="/#" className="header--link">Занятия</Link>
							<Link href="/#" className="header--link">Как участвовать?</Link>
							<Link href="/#" className="header--link">Новости</Link>
							<Link href="/#" className="header--link">Контакты</Link>
							<Link href="/#" className="header--link">Галерея</Link>
							{/* <button
								className="nav-btn nav-close-btn"
								onClick={showNavbar}>
								<FaTimes />
							</button> */}
						</nav>
						<div className="header--wrapper-person">
						<img src={user} alt="person"/>
						<Link href="#" className="header--wrapper-person-link">Личный кабинет</Link>
						</div>
						{/* <button className="nav-btn" onClick={showNavbar}>
							<FaBars />
						</button> */}
					</div>
				</div>
			</header>
  )
}
export default Header;
