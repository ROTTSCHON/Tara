import { Link } from "react-router-dom";
import "./button.css"
import logo from "../../images/logotara.png"
  function Buttons()
  {
      return(
          <div className="container-button-home">
              <div className="upper">
              <h1><span><img src={logo} alt="logo" width={"40px"} height={"40px"}/></span>Romanian Rottweiler Breeder - Rottschon Kennel</h1>
              <p>A small kennel, focused on breeding show quality and working abilities dogs , with the goal of improving our breeding program with each litter.</p>
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