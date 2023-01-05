import React from "react";
import groupPhoto from "../assets/hero-group-img.png";

function Hero() {
    return (
        <section className="hero">
            <img src={groupPhoto} alt="group" className="hero-img img-fluid"/>
            <h1 className="hero-title"> Online Experiences</h1>
            <p className="hero-content"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;