import React from "react";
import "./about.css"
import Header from "../../Components/Header/header";
import Breeding from "../../Components/Breeding/breeding";
import ImageSlider from "../../Components/Slider/slider";
import { sliderData } from "../../Components/Slider/sliderData";
import Text from "../../Components/Text/text";

function About(){
    return(
        <div className="about-page">
            <Header/>
            <Breeding/>
            <Text/>
            <ImageSlider  slides={sliderData} />
            
        </div>
    )
}

export default About