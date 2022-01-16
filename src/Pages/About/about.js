import React from "react";
import "./about.css"
import Header from "../../Components/Header/header";
import ImageSlider from "../../Components/Slider/slider";
import { sliderData } from "../../Components/Slider/sliderData";
import Text from "../../Components/Text/text";
import NavBar from "../../Components/NavBar/navbar";
import Navbarpc from "../../Components/NavbarPc/Navbarpc";
import Footer from "../../Components/Footer/footer";

function About(){
    return(
        <div className="about-page">
            <Header/>
            <NavBar/>
            <Navbarpc/>
            <Text/>
            <ImageSlider  content={sliderData} />
            <Footer/>
        </div>
    )
}

export default About