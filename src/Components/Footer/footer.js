import React from 'react'
import "./footer.css"
import logo from "../../images/logotara.png"
export default function Footer() {
    
    return (
        <div className='footer-container'>
                        <div className='footer-logo-container'>
                                            <img src={logo} alt='logo-tara' className='footer-logo'></img>
                        </div>
            <div className='footer-three-divs'>
                         <div className='footer-contact'>
                                            <h1>
                                                Rottfreund Kennel from Romania sell Rottweiler puppies with all documents.
                                            </h1>
                                            <h2>Contact us here:</h2>
                                            <p>
                                                Telephone number: 0747 798 540 / 0730 230 855 <br/>
                                                Email: denisfarcasc@gmail.com <br/>
                                                Adress: Strada Grigore Antipa nr 3 <br/>
                                                City: Cluj-Napoca / County: Cluj-Napoca <br/>
                                                Owner: Farcas Denis Cristian / Borsoviczky Anca
                                            </p>
                        </div>
           </div>
            <div className='footer-rights'>
                <h3>Copyright © 2021-<span>{(new Date().getFullYear())}</span>rottschon.github.io/Vectra/ All rights reserved.
                Site designed and built by Front-End Developer: Adi Cotirla <a href="mailto:adioprea53@gmail.com">adioprea53@gmail.com</a>
                </h3> 
            </div>
        </div>
    )
}
