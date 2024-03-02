import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/HeaderComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error/Error';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';
import { RouterPathChildren } from './Router';

const App = () => {
	return (
		<Provider store={appStore}>
			<div className='App'>
				<HeaderComponent />
				<Outlet />
			</div>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: RouterPathChildren,
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
