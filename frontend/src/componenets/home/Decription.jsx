import React from 'react'

function Decription() {
    return (
        <div className="home__description">
            <p className="home__text">Hi, my name is</p>

            <h1 className="home__title">
                Gabrielle Lu
            </h1>

            <h3 className="home__subtitle">
                Software Engineer, Front End & Back End Developer
            </h3>

            <div className="home__buttons">
                <a href="#projects" className="button button--flex">
                    See My Projects
                    <i class="uil uil-arrow-up-right button__icon"></i>
                </a>

                <a href="#contact" className="button button--flex">
                    Contact Me
                    <i class="uil uil-arrow-up-right button__icon"></i>
                </a>
            </div>
        </div>
    )
}

export default Decription