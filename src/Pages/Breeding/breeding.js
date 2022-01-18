import React from 'react'
import Breed from '../../Components/Breed/breed'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import NavBar from '../../Components/NavBar/navbar'
import Navbarpc from '../../Components/NavbarPc/Navbarpc'
import WillAndTara from '../../Components/TextData/WillAndTara'
import "./breeding.css"

const Breeding = () => {
    return (
        <div className='breeding page'>
            <Header/>
            <Navbarpc/>
            <NavBar/>
            <Breed cardData = {WillAndTara}/>
            <Footer/>
        </div>
    )
}

export default Breeding
