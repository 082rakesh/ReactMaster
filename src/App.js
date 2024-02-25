import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import HeaderComponent from './components/HeaderComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './screen/Contact';
import About from './screen/About';
import Error from './components/Error/Error';
import Home from './screen/Home';
import RestuarantDetails from './screen/RestuarantDetails';

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