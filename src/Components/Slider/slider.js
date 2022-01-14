import React from 'react';
import './slider.css'
import { sliderData } from './sliderData';
import { useState } from 'react';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'


const ImageSlider = ({slides}) =>
{
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextPhoto = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const lastPhoto = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    return(
            <section className="slider">
            <div>
            {sliderData.map((slides, index) =>
            {
                return(
                <h1 className={index === current ? 'title active' : 'title inactive'}
                key={index}>
                    {slides.title}
                </h1>
                )
                })}
            </div>
            <div className='content'>
            <FaAngleLeft className="arrow left" onClick={lastPhoto}/>
            {sliderData.map((slides, index) =>
            {
                return(
                    <div className={index === current ? 'slide active' : 'slide inactive'}
                    key={index}>
                        {index === current && (<img src={slides.urls} alt='Puppies' className="image" />)}
                        
                    </div>
                ) 
            })}
            <FaAngleRight className="arrow right"onClick={nextPhoto}/>
            </div>
        </section>
    )
}



export default ImageSlider