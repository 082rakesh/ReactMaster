import Home from './screen/Home';
import About from './screen/About';
import Cart from './screen/Cart';
import Contact from './screen/Contact';
import RestuarantDetails from './screen/RestuarantDetails';
import App from './App';

export const RouterPathChildren = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/restuarants/:resId',
		element: <RestuarantDetails />,
	},
];
