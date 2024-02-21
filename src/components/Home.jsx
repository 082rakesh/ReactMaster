import { useEffect, useState } from "react";
import {ALL_RESTURANTS} from '../constants/constant'
import Button from './Button';
import Shimmer from './Shimmer';
import SearchBox from './SearchBox';
import '../css/App.css';
import CardComponent from './CardComponent';
import { Link } from "react-router-dom";

const Home = () => {
    const [listOfResturants, setListOfResturant] = useState([])

    useEffect(() => {
        fetchRestuarants()
    }, [])

    const onFilterHandler = () => {
        const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4)
        console.log(filteredList)
        setListOfResturant(filteredList)
    }

     const fetchRestuarants = async () => {
        const response = await fetch(ALL_RESTURANTS)
        const jsonResponse = await response.json()
        const restaurants = jsonResponse?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        
        console.log("restaurants -> "+restaurants)
        setListOfResturant(restaurants)
    }

    return listOfResturants.length == 0 ? <Shimmer /> : (

        <div className='body'>
            <div className='filter-container'>
                <Button onClick ={onFilterHandler} title = "Filter" />
                <SearchBox />
            </div>
            <div className='res-container'>
                {listOfResturants.map((resturant) => ( <Link key={resturant.info.id} to={"/restuarants/"+resturant.info.id}><CardComponent resData= {resturant} /></Link>))}
            </div>
        </div>
    )
}

export default Home;