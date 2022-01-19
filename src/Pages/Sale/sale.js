import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import NavBar from '../../Components/NavBar/navbar'
import Navbarpc from '../../Components/NavbarPc/Navbarpc'
import Puppies from '../../Components/Puppies/puppies'
import { puppy } from '../../Components/TextData/puppiesData'

const Sale = () => {
    return (
        <div className='sale page'>
            <Header/>
            <Navbarpc/>
            <NavBar/>
            <Puppies puppiesData={puppy}/>
            <Footer/>
        </div>
    )
}

export default Sale
