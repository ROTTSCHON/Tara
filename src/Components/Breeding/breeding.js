import React from "react";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import "./breeding.css"
function Breeding(){
    return(
        <div className="container-breeding">
            <div className="link-container">
                <Link to="/Vectra/"><button className="button breed">Home</button></Link>
                <Link to="/Vectra/Breeding"><button className="button breed">Breeding</button></Link>
                <Link to="/Vectra/Contact"><button className="button breed">Contact</button></Link>
            </div>
            <div className="logo-container">
                <a href="https://www.facebook.com/denis.denisuk.16"><FaFacebookSquare className="logo facebook"/></a>
                <a href="https://www.instagram.com/tara_the_little_rottie/"><FaInstagramSquare className="logo insta"/></a>
            </div>
        </div>
    )
}

export default Breeding