import React from 'react'
import firstBreed from "../../images/breeding.jpg"
import "./breed.css"

const Breed = ({cardData}) => {
    return (
        <div className='container-breeding'>
            <div className='text-div'>
                    <div className="cards">
                         <div className="card">
                {cardData.map((data, index) =>
            {
                return(
                    <h1 key={index}>
                    {data.mascul}
                </h1>
                )
            })}
                         {cardData.map((data, index) =>
            {
                return(
                    <p key={index}>
                    {data.tataMascul}<br/> {data.mamaMascul}
                </p>
                )
            })}
                        </div>
                        <div className="card">
                        {cardData.map((data, index) =>
            {
                return(
                    <h1 key={index}>
                    {data.femela}
                </h1>
                )
            })}
                        {cardData.map((data, index) =>
            {
                return(
                    <p key={index}>
                    {data.tataFemela}<br/>{data.mamaFemela}
                </p>
                )
            })}
                        </div>
                    </div>
            </div>
            <img src={firstBreed} alt="new breed" className='image breed' ></img>
        </div>
    )
}

export default Breed
