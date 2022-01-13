import React from "react";
import breed from "../../images/breeding.jpg"
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
            <div className="image-container"> <img src={breed} alt="breed"/> </div>
            <div className="link-container">
                <Link to="/Vectra/"><button className="button breed">Acasa</button></Link>
                <Link to="/Vectra/Contact"><button className="button breed">Contact</button></Link>
            </div>
        </div>
    )
}

export default Breeding