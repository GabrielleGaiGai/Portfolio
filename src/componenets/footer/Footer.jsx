import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className='footer__title'>Gabrielle</h1>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li className="footer__item">
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>

                    <li className="footer__item">
                        <a href="#projects" className="footer__link">
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="http://linkedin.com/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="http://github.com/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="http://www.instagram.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer