import React from 'react'
import './Projects.css'
import { projectsData } from './Data';
import Item from './Item';

function Projects() {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__container container">
                {projectsData.map((item, index) => {
                    return (
                        <Item item={item} key={index} />
                    );
                })}

            </div>
        </section>
    )
}

export default Projects