import React, { useState, useEffect, useRef } from 'react'

function validate_link(link, title) {
    if (link.length === 0) {
        return (<></>)
    } else {
        return (
            <a href={link} className="projectItem__link" target="_blank" rel="noopener noreferrer">
                {title}
                <i className="uil uil-arrow-right projectItem__icon"></i>
            </a>
        )
    }
}

function Item({ item }) {
    const [toggleState, setToggleState] = useState(false);
    const detailBox = useRef(0);
    const openProject = useRef(0);

    useEffect(() => {
        function clickAnyelse(event) {
            if (!openProject.current.contains(event.target) &&
                detailBox.current.className.includes("projectItem__box-active") &&
                !detailBox.current.contains(event.target)) {
                setToggleState(false);
            }
        }
        document.body.addEventListener('click', clickAnyelse);
    }, [])

    return (
        <div className="projectItem box">
            <h3 className="projectItem__title">
                {item.name}
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
                            <div className="projectItem_content">
                                {item.language}
                            </div>
                        </div>

                        <div className="projectItem__pair">
                            <div className="projectItem__key">
                                Tool(s):
                            </div>
                            <div className="projectItem_content">
                                {item.tools}
                            </div>
                        </div>

                        <div className="projectItem__pair">
                            <div className="projectItem__key">
                                Description:
                            </div>
                            <div className="projectItem_content">
                                {item.description}
                            </div>
                        </div>

                        <div className="projectItem__links">
                            {validate_link(item.source_code_link, "Source Code")}
                            {validate_link(item.demo_link, "Demo")}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item