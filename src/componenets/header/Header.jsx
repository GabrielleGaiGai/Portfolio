import React, { useState } from 'react';
import "./Header.css";

function Header() {
  const [Show_toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">

        <div className={Show_toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className='home'>
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                <span className='nav__text'> Home </span>
              </a>
            </li>
            
            <li className='about'>
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                <span className='nav__text'> About </span>
              </a>
            </li>

            <li className='skills'>
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-info-alt nav__icon"></i>
                <span className='nav__text'> Skills </span>
              </a>
            </li>

            <li className='projects'>
              <a href="#projects" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                <span className='nav__text'> Projects </span>
              </a>
            </li>

            <li className='contact'>
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                <span className='nav__text'> Contact </span>
              </a>
            </li>
          </ul>
        </div>

        <div className={Show_toggle ? "nav__close" : "nav__close hide-icon"} onClick={() => showMenu(!Show_toggle)}>
          <i className='uil uil-multiply'></i>
          <span> Close </span>
        </div>

        <div className={Show_toggle ? "nav__toggle hide-icon" : "nav__toggle"} onClick={() => showMenu(!Show_toggle)}>
          <i className="uil uil-apps"></i>
          <span> Menu </span>
        </div>

      </nav>
    </header>
  )
}

export default Header;