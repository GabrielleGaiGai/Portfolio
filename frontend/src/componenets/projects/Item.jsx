import React, { useState, useEffect, useRef } from 'react'

function validate_link(link, ref) {
    if (link.length === 0) {
        return (<></>)
    } else {
        if (ref.includes("github")) {
            return (
                <a href={link} className="projectItem__link" target="_blank" rel="noopener noreferrer">
                    <i class="uil uil-github"></i>
                </a>
            )
        } else {
            return (
                <a download="Simualtor" href={link} className="projectItem__link">
                    <i class="uil uil-paperclip"></i>
                </a>)
        }

    }
}

function Item({ item }) {
    const [toggleState, setToggleState] = useState(false);
    const detailBox = useRef(0);
    const openProject = useRef(0);

    // useEffect(() => {
    //     function clickAnyelse(event) {
    //         if (!openProject.current.contains(event.target) &&
    //             detailBox.current.className.includes("projectItem__box-active") &&
    //             !detailBox.current.contains(event.target)) {
    //             setToggleState(false);
    //         }
    //     }
    //     document.body.addEventListener('click', clickAnyelse);

    //     return () => {
    //         document.body.removeEventListener('click', clickAnyelse);
    //     }
    // }, [])

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        if (toggleState) {
            html.classList.add('lock-scroll')
        } else {
            html.classList.remove('lock-scroll')
        }
    }, [toggleState])

    return (
        <div className="projectItem box">
            <h3 className="projectItem__title">
                {validate_link(item.source_code_link, "github")}
                {validate_link(item.demo_link, "paper")}
                <h4> {item.name} </h4>
            </h3>
            <div className="projectItem__intro">
                {item.intro}
            </div>
            <div className="projectItem__more" onClick={() => setToggleState(true)} ref={openProject}>
                View More
                <i class="uil uil-arrow-right projectItem__icon"></i>
            </div>

            <div className={toggleState ? "projectItem__data projectItem__data-active" : "projectItem__data"}>
                <div className={toggleState ? "projectItem__box box projectItem__box-active" : "projectItem__box box"} ref={detailBox}>
                    <div className="projectItem__detail">
                        <i className="uil uil-times projects__close" onClick={() => setToggleState(false)}></i>
                        <h3 className="projectItem__detail__title">
                            {item.name}
                        </h3>

                        <div className="projectItem__pair">
                            <div className="projectItem__key">
                                Language(s):
                            </div>
                            <div className="projectItem__content">
                                {item.language}
                            </div>
                        </div>

                        <div className="projectItem__pair">
                            <div className="projectItem__key">
                                Tool(s):
                            </div>
                            <div className="projectItem__content">
                                {item.tools}
                            </div>
                        </div>

                        <div className="projectItem__pair">
                            <div className="projectItem__key">
                                Description:
                            </div>
                            <div className="projectItem__content">
                                <ul>
                                    {item.description.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item