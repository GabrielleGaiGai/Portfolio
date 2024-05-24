import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    {
      title: "Programming",
      content: ["HTML/CSS", "JavaScript", "TypeScript", "Java", "Python", "Racket", "C", "C++", "C#", "SQL", "AQL", "VBA"]
    },
    {
      title: "Framework",
      content: ["React", "Angular", "Node.js", "Express.js", "Django", "Redux", "Bootstrap", "Sass"]
    },
    {
      title: "Developer Tools",
      content: ["Linux", "Git", "AWS", "Azure", "REST API", "MongoDB", "MySQL", "ArangoDB", "Docker", "Jenkins", "Figma", "Wordpress"]
    },
    {
      title: "Testing tools",
      content: ["Junit", "Cucumber", "Mocha", "Jest", "Jasmine", "Postman", "Selenium", "Appium"]
    }
  ]

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container">

        {skills.map((box) => (<div className="skill__box box">
          <h3 className="skill__title">
            {box.title}
          </h3>

          <div className="skill__content">
            {box.content.map((item) => (
              <div className="skill__data">
                <i class="uil uil-check-circle"></i>
                {item}
              </div>
            ))}
          </div>
        </div>))}
      </div>
    </section>
  )
}

export default Skills