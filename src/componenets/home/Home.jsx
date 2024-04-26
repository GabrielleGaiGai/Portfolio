import React from 'react';
import "./Home.css";
import Decription from './Decription';
import Social from './Social';

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <Social />
                    <div className="home__img"></div>
                    <Decription />
                </div>
            </div>
        </section>

    )
}

export default Home