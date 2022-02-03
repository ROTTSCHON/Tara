import React from 'react'
import './header.css'
import logo from "../../images/logotara.png"

  function Header(){
      return(
        <div className="header">
            <span><img src={logo} alt='logo'className='logo-image'/></span>
            <h1 className='kennel'>ROTTFREUND KENNEL</h1>
            <span><img src={logo} alt='logo' className='logo-image'/></span>
          </div>
      )
  }
  export default Header