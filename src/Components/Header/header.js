import React from 'react'
import './header.css'
import logo from "/Users/Adrian/rara/src/images/title.jpg"

  function Header(){
      return(
        <div className="header">
            <h1>ROTTSCHON <span><img src={logo} width={"100px"} height={"100px"}/></span>KENNEL</h1>
          </div>
      )
  }
  export default Header