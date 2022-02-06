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
                            <div className={detailsM ? 'infos' : 'infos closedM'} >
                                <h1 className='name'>
                                    {data.mascul.name}
                                </h1>
                                <p>
                                    {data.mascul.father}<br/> {data.mascul.mother}
                                </p>
                                <p>
                                    {data.mascul.titluri}
                                </p>
                                <FaAngleRight className={detailsM ? 'arrow arrow-details-down' : 'arrow arrow-details' } onClick={showDetailsM}/>
                                <div className={detailsM ? 'detailsM-active' : 'detailsM'}>
                                    <img src={data.mascul.img} alt="male"></img>
                                    <img src={data.mascul.pedigree} alt="male"></img>

                                </div>
                            </div>
                            <div className={detailsF ? 'infos' : 'infos closedF'}>
                                <h1 className='name'>
                                    {data.femela.name}
                                </h1>
                                <p>
                                    {data.femela.father}<br/>{data.femela.mother}
                                </p>
                                <FaAngleRight className={detailsF ? 'arrow arrow-details-down' : 'arrow arrow-details' } onClick={showDetailsF}/>
                                <div className={detailsF ? 'detailsF-active' : 'detailsF'}>
                                    <img src={data.femela.img} alt="female"></img>
                                    <img src={data.femela.pedigree} alt="female"></img>

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
