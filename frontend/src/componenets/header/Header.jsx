import React, { useState, useEffect, useRef } from 'react';
import "./Header.css";

function Header() {
  const [open, openMenu] = useState(false);
  const menu = useRef(0);
  const open_menu = useRef(0);

  useEffect(() => {
    function clickAnyelse(event) {
      if (!open_menu.current.contains(event.target) &&
        menu.current.className.includes("show-menu") &&
        !menu.current.contains(event.target)) {
        openMenu(false);
      }
    }
    document.body.addEventListener('click', clickAnyelse);
  }, [])

  return (
    <header className="header">
      <nav className="nav container">

        <div className={open ? "nav__menu show-menu" : "nav__menu"} ref={menu}>
          <ul className="nav__list">
            <li className='home'>
              <a href="#home" className="nav__link" onClick={() => openMenu(false)}>
                <i className="uil uil-estate nav__icon"></i>
                <span className='nav__text'> Home </span>
              </a>
            </li>

            <li className='about'>
              <a href="#about" className="nav__link" onClick={() => openMenu(false)}>
                <i className="uil uil-user nav__icon"></i>
                <span className='nav__text'> About </span>
              </a>
            </li>

            <li className='skills'>
              <a href="#skills" className="nav__link" onClick={() => openMenu(false)}>
                <i className="uil uil-file-info-alt nav__icon"></i>
                <span className='nav__text'> Skills </span>
              </a>
            </li>

            <li className='projects'>
              <a href="#projects" className="nav__link" onClick={() => openMenu(false)}>
                <i className="uil uil-folder-open nav__icon"></i>
                <span className='nav__text'> Projects </span>
              </a>
            </li>

            <li className='contact'>
              <a href="#contact" className="nav__link" onClick={() => openMenu(false)}>
                <i className="uil uil-message nav__icon"></i>
                <span className='nav__text'> Contact </span>
              </a>
            </li>
          </ul>
        </div>

        <div className={open ? "nav__close" : "nav__close hide-icon"} onClick={() => openMenu(false)}>
          <i className='uil uil-multiply'></i>
          <span> Close </span>
        </div>

        <div className={open ? "nav__toggle hide-icon" : "nav__toggle"} onClick={() => openMenu(true)} ref={open_menu}>
          <i className="uil uil-apps"></i>
          <span> Menu </span>
        </div>

      </nav>
    </header>
  )
}

export default Header;