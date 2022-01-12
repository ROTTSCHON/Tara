import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./button.css"
  function Buttons()
  {
      return(
          <div className="container">
              <div className="upper">
              <h1>⭐Romanian Rottweiler Breeder - Rottschon Kennel</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="lower">
              <Link to="/">
                  <button className="button">About us</button>
              </Link>
              </div>
          </div>
      )
  }

  export default Buttons