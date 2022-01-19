import React, { useState } from 'react'
import "./puppies.css"
import { FaAngleRight } from 'react-icons/fa'

function Puppies({ puppiesData }) {
    const [Ace, setAce] = useState(false)
    const showAce = () => setAce(!Ace)
    const [Atena, setAtena] = useState(false)
    const showAtena = () => setAtena(!Atena)
    const [Aslan, setAslan] = useState(false)
    const showAslan = () => setAslan(!Aslan)
    return (
        <div>
            {puppiesData.map((puppy, index) => {
                return (
                    <div className='cards-puppy' key={index}>
                        <div className='puppy-container'>
                            <h1>{puppy.Ace.name}</h1>
                            <div className='puppy-image-container'>
                                <img src={puppy.Ace.front} alt='front-puppy' className='puppy-image' />
                                <img src={puppy.Ace.side} alt='side-puppy' className='puppy-image' />
                            </div>
                            <FaAngleRight className={Ace ? 'arrow arrow-details-down' : 'arrow arrow-details'} onClick={showAce} />
                            <div className={Ace ? 'Ace-active' : 'Ace'}>
                                <img src={puppy.Ace.pedigree} alt="pedigree"></img>
                            </div>
                        </div>
                        <div className='puppy-container'>
                            <h1>{puppy.Atena.name}</h1>
                            <div className='puppy-image-container'>
                                <img src={puppy.Atena.front} alt='front-puppy' className='puppy-image' />
                                <img src={puppy.Atena.side} alt='side-puppy' className='puppy-image' />
                            </div>
                            <FaAngleRight className={Atena ? 'arrow arrow-details-down' : 'arrow arrow-details'} onClick={showAtena} />
                            <div className={Atena ? 'Atena-active' : 'Atena'}>
                                <img src={puppy.Atena.pedigree} alt="pedigree"></img>
                            </div>
                        </div>
                        <div className='puppy-container'>
                            <h1>{puppy.Aslan.name}</h1>
                            <div className='puppy-image-container'>
                                <img src={puppy.Aslan.front} alt='front-puppy' className='puppy-image' />
                                <img src={puppy.Aslan.side} alt='side-puppy' className='puppy-image' />
                            </div>
                            <FaAngleRight className={Aslan ? 'arrow arrow-details-down' : 'arrow arrow-details'} onClick={showAslan} />
                            <div className={Aslan ? 'Aslan-active' : 'Aslan'}>
                                <img src={puppy.Aslan.pedigree} alt="pedigree"></img>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Puppies
