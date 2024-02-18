import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import resList from './resturant_data.json'

const imgBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const HeaderComponent = () => {
    return (
        <div className='header'> 
        <div className='logo-container'>
        <img className='logo'
            src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg'
            />
        </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>                    
                </ul>
            </div>
        </div>
    )
}

const CardComponent = (props) => {
    const resData = props.resData
    const {id, name, cuisines, avgRating, sla} = resData.info // destructuring data
    return (
        <div className='res-card-container'>
            <div className='cuisine-image-container'>
                <img 
                className='cuisine-image' 
                alt='cuisine-image' 
                src={imgBaseUrl+resData.info.cloudinaryImageId}>
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


const DashboardComponent = () => {
    return (
        <div className='App'>
            <div className='header-container'>
                <HeaderComponent />
            </div>
            <div className='body'>
                <div className='res-container'>
                    {resList.map((resturant) => (<CardComponent key={resturant.info.id} resData= {resturant} />))}
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<DashboardComponent />)