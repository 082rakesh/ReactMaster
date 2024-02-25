import { Link } from 'react-router-dom';
const HeaderComponent = () => {
	return (
		<div className='flex justify-between border border-spacing-5'>
			<div className='logo-container'>
				<img
					className='w-40 ml-10 mt-5'
					src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg'
				/>
			</div>
			<div className='m-20'>
				<ul>
					<Link to={'/'} className='p-5'>
						Home
					</Link>
					<Link to={'/about'} className='p-2'>
						About Us
					</Link>
					<Link to={'./contact'} className='p-2'>
						Contact Us
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
