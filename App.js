import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './src/css/App.css';
import resList from './resturant_data.json'
import HeaderComponent from './src/components/HeaderComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './src/components/Contact';
import About from './src/components/About';
import Error from './src/components/Error';
import Home from './src/components/Home';
import RestuarantDetails from './src/components/RestuarantDetails';

const App = () => {
    return (
        <div className='App'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restuarants/:resId",
                element: <RestuarantDetails />
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)