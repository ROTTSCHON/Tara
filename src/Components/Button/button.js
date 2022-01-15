import { Link } from "react-router-dom";
import "./button.css"
import logo from "../../images/logotara.png"
  function Buttons()
  {
      return(
          <div className="container-button-home">
              <div className="upper">
              <h1><span><img src={logo} alt="logo" width={"40px"} height={"40px"}/></span>Romanian Rottweiler Breeder - Rottschon Kennel</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="lower">
              <Link to="/Vectra/About">
                  <button className="button">About us</button>
              </Link>
              </div>
          </div>
      )
  }

  export default Buttons