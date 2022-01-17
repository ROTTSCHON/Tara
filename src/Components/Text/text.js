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
                    <div className="cards">
                         <div className="card">
                         {cardData.map((data, index) =>
            {
                return(
                <p key={index}>
                    {data.CardOne}
                </p>
                )
                })}
                        </div>
                        <div className="card">
                        {cardData.map((data, index) =>
            {
                return(
                <p key={index}>
                    {data.CardTwo}
                </p>
                )
                })}
                        </div>
                    </div>
            </div>
    )
}

export default Text