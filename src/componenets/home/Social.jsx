import React from 'react'

function Social() {
    return (
        <div className="home__social">
            <a href="http://linkedin.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>
            
            <a href="http://github.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="http://www.instagram.com" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-instagram"></i>
            </a>
        </div>
    )
}

export default Social