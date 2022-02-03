import React from 'react'
import "./puppies.css"


function Puppies({ puppiesData }) {
   
    return (
        <div className='cards-puppy'>
            <h1 className='title-litter'>Litter A</h1>
            <div className='puppies'>
            {puppiesData.map((puppy, index) => {
                return (
                        <div className='puppy-container'  key={index}>
                            <h1>{puppy.name}</h1>
                            <h2>{puppy.sex}</h2>
                            <div className='puppy-image-container'>
                                <img src={puppy.front} alt='front-puppy' className='puppy-image' />
                            </div>
                            <h3 className='price'>{puppy.price}</h3>
                            </div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default Puppies
