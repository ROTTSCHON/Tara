import React from "react";
import "./text.css"
function Text({cardData}){
    return(
            <div className='text-div'>
                {cardData.map((data, index) =>
            {
                return(
                <h1 key={index}>
                    {data.title}
                </h1>
                )
                })}
                         {cardData.map((data, index) =>
            {
                return(
                         <div className="cards" key={index}>
                                <div className="card one">
                                            <p>
                                                {data.CardOne}
                                            </p>
                                </div>
                                <div className="card two">
                                            <p>
                                                {data.CardTwo}
                                            </p>
                                </div>
                        </div>)})}
            </div>
    )
}

export default Text