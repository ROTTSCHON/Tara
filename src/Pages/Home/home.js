import React from "react";
import "./home.css"
import Header from "../../Components/Header/header";
import ImageSlider from "../../Components/Slider/slider";
import { sliderData } from "../../Components/Slider/sliderData";
import Text from "../../Components/Text/text";
import NavBar from "../../Components/NavBar/navbar";
import Navbarpc from "../../Components/NavbarPc/Navbarpc";
import Footer from "../../Components/Footer/footer";

function Home(){
    return(
        <div className="home">
            <Header/>
            <NavBar/>
            <Navbarpc/>
            <Text/>
            <ImageSlider  content={sliderData} />
            <Footer/>
        </div>
    )
}

export default Home