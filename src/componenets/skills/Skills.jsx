import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container">

        <div className="skill__box box">
          <h3 className="skill__title">
            Programming
          </h3>

          <div className="skill__content">
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              JavaScript
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Java
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              HTML/CSS
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Python
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              SQL
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              C
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              C++
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              VBA
            </div>
          </div>
        </div>

        <div className="skill__box box">
          <h3 className="skill__title">
            Framework
          </h3>

          <div className="skill__content">
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Angular
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              React
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Node.js
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              JUnit
            </div>

          </div>
        </div>

        <div className="skill__box box">
          <h3 className="skill__title">
            Developer Tools
          </h3>
          <div className="skill__content">
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Linux
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Git
            </div>
            <div className="skill__data">
              <i class="uil uil-check-circle"></i>
              Postman
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills