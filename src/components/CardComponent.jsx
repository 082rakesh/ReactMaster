import React from 'react'
import '../css/App.css';
import {IMG_BASE_URL} from '../constants/constant.js'


const CardComponent = (props) => {
    const resData = props.resData
    const {id, name, cuisines, avgRating, sla} = resData.info // destructuring data
    return (
        <div className='res-card-container'>
            <div className='cuisine-image-container'>
                <img 
                className='cuisine-image' 
                alt='cuisine-image' 
                src={IMG_BASE_URL+resData.info.cloudinaryImageId}>
                </img>
            </div>
            <div className='res-details'>
                <h4>{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}

export default CardComponent;