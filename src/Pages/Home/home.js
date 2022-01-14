import react from "react";
import Header from "../../Components/Header/header";
import Buttons from "../../Components/Button/button";
import "./home.css"

function Home(){
    return(
        <div className="home">
            <Header/>
            <Buttons/>
        </div>
    )
}

export default Home