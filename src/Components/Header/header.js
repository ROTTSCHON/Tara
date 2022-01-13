import React from 'react'
import './header.css'
import logo from "../../images/logotara.png"

  function Header(){
      return(
        <div className="header">
            <span><img src={logo} width={"100px"} height={"100px"}/></span>
            <h1>ROTTSCHON KENNEL</h1>
            <span><img src={logo} width={"100px"} height={"100px"}/></span>
          </div>
      )
  }
  export default Header