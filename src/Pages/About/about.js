import React from "react";
import "./about.css"
import Header from "../../Components/Header/header";
import Breeding from "../../Components/Breeding/breeding";

function About(){
    return(
        <div className="about-page">
            <Header/>
            <Breeding/>
        </div>
    )
}

export default About