import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './src/css/App.css';
import resList from './resturant_data.json'
import HeaderComponent from './src/components/HeaderComponent';
import CardComponent from './src/components/CardComponent';
import Filter from './src/components/Filter';

const App = () => {
    const [listOfResturants, setListOfResturant] = useState(resList);

    const onFilterHandler = () => {
        const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4)
        console.log(filteredList)
        setListOfResturant(filteredList)
    }

    return (
        <div className='App'>
            <div className='header-container'>
                <HeaderComponent />
            </div>
            <div className='filter-container'>
            <Filter onClick ={onFilterHandler} />
            </div>
            
            <div className='body'>
                <div className='res-container'>
                    {listOfResturants.map((resturant) => (<CardComponent key={resturant.info.id} resData= {resturant} />))}
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)