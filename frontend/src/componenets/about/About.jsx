import React from 'react'
import './About.css'
import Qualification from './Qualification'
import Publification from './Publification'


function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container">
                <Publification />
                <Qualification />
            </div>


        </section>
    )
}

export default About