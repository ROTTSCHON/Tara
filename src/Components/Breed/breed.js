import React, {useState} from 'react'
import firstBreed from "../../images/breeding.jpg"
import "./breed.css"
import { FaAngleRight } from 'react-icons/fa'
const Breed = ({ cardData }) => {
    const [detailsF, setDetailsF] = useState(false)
    const showDetailsF = () => setDetailsF(!detailsF)
    const [detailsM, setDetailsM] = useState(false)
    const showDetailsM = () => setDetailsM(!detailsM)

    return (
        <div className='container-breeding'>
            <div className='text-div'>
                {cardData.map((data, index) => {
                    return (
                        <div className="cards" key={index}>
                            <div className={detailsM ? 'card' : 'card-closed'} >
                                <h1 className='name'>
                                    {data.mascul}
                                </h1>
                                <p>
                                    {data.tataMascul}<br/> {data.mamaMascul}
                                </p>
                                <FaAngleRight className={detailsM ? 'arrow arrow-details-down' : 'arrow arrow-details' } onClick={showDetailsM}/>
                                <div className={detailsM ? 'detailsM-active' : 'detailsM'}>
                                    <img src={data.imgM} alt="male"></img>
                                </div>
                            </div>
                            <div className={detailsF ? 'card' : 'card-closed'}>
                                <h1 className='name'>
                                    {data.femela}
                                </h1>
                                <p>
                                    {data.tataFemela}<br/>{data.mamaFemela}
                                </p>
                                <FaAngleRight className={detailsF ? 'arrow arrow-details-down' : 'arrow arrow-details' } onClick={showDetailsF}/>
                                <div className={detailsF ? 'detailsF-active' : 'detailsF'}>
                                    <img src={data.imgF} alt="male"></img>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <img src={firstBreed} alt="new breed" className='image breed' ></img>
        </div>
    )
}

export default Breed
