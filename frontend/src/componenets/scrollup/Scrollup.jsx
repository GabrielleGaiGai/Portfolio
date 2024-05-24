import React from 'react'
import './Scrollup.css'

function Scrollup() {
    window.addEventListener("scroll", function () {
        const scrollUp = document.getElementById("scrollup");
        if (this.scrollY >= this.window.innerHeight) {
            scrollUp.classList.add("show-scroll");
        }
        else {
            scrollUp.classList.remove("show-scroll");
        }
    });

    return (
        <a href="https://gabriellegaigai.github.io/portfolio/#" className="scrollup" id='scrollup'>
            <i className="uil uil-angle-double-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup