import React from "react";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa"
import {
    Link
  } from "react-router-dom";
  import "./Navbarpc.css"
function Navbarpc(){
    return(
        <div className="container-navbar-pc">
            <div className="link-container">
                <Link to="/Vectra/"><button className="button">Home</button></Link>
                <Link to="/Vectra/Breeding"><button className="button">Breeding</button></Link>
                <Link to="/Vectra/Sale"><button className="button">FOR SALE</button></Link>
            </div>
            <div className="logo-container">
                <a href="https://www.facebook.com/denis.denisuk.16"><FaFacebookSquare className="logo facebook"/></a>
                <a href="https://www.instagram.com/tara_the_little_rottie/"><FaInstagramSquare className="logo insta"/></a>
            </div>
        </div>
    )
}

export default Navbarpc