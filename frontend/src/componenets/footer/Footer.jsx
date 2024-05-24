import React from 'react'
import './Footer.css';

function Footer() {
    const today = new Date();

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
                    <a href="http://linkedin.com/in/xiangzhu-lu-6ba542165" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/GabrielleGaiGai" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <p>Copyright &copy; {today.getFullYear()}</p>
            </div>
        </footer>

    )
}

export default Footer