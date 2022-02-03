import React from 'react'
import "./puppies.css"


function Puppies({ puppiesData }) {
   
    return (
        <div className='cards-puppy'>
            {puppiesData.map((puppy, index) => {
                return (
                        <div className='puppy-container'  key={index}>
                            <h1>{puppy.name}</h1>
                            <div className='puppy-image-container'>
                                <img src={puppy.front} alt='front-puppy' className='puppy-image' />
                            </div>
                            </div>
                    
                )
            })}
        </div>
    )
}

export default Puppies
