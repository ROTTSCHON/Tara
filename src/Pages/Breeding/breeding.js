import React from 'react'
import Breed from '../../Components/Breed/breed'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import NavBar from '../../Components/NavBar/navbar'
import Navbarpc from '../../Components/NavbarPc/Navbarpc'
import newBreed from '../../Components/TextData/newBreedData'
import "./breeding.css"

const Breeding = () => {
    return (
        <div className='breeding page'>
            <Header/>
            <Navbarpc/>
            <NavBar/>
            <Breed cardData = {newBreed}/>
            <Footer/>
        </div>
    )
}

export default Breeding
