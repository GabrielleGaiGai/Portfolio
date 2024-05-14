import React from 'react'
import './About.css'
import Qualification from './Qualification'
import Publification from './Publification'
import CV from '../../assets/CV_Xiangzhu Lu.pdf'


function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__CV">
                <a download="Xiangzhu Lu - CV" href={CV} className="button button--flex">
                    Download CV
                    <i class="uil uil-file-download-alt button__icon"></i>
                </a>
            </div>

            <div className="about__container container">
                <Publification />
                <Qualification />
            </div>


        </section>
    )
}

export default About