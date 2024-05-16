import React from 'react';
import "./Home.css";
import Decription from './Decription';
import Social from './Social';
import ProfileImg from "../../assets/profile.jpg";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <Social />
                    <img src={ProfileImg} alt="" className="home__img" />
                    <Decription />
                </div>
            </div>
        </section>

    )
}

export default Home