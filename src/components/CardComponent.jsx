import React from 'react';
import { IMG_BASE_URL } from '../constants/constant.js';

const CardComponent = (props) => {
	const resData = props.resData;
	const { id, name, cuisines, avgRating, sla } = resData?.info; // destructuring data
	return (
		<div className='m-4 p-4 w-[250px] bg-gray-100 shadow-lg rounded-lg hover:bg-gray-400'>
			<img
				className='h-[200px] w-[250px] rounded-lg'
				alt='cuisine-image'
				src={IMG_BASE_URL + resData.info.cloudinaryImageId}
			></img>
			<div className='mt-5'>
				<h4 className=' font-bold'>{name}</h4>
				<h4>{cuisines.join(', ')}</h4>
				<h4 className=' font-bold'>{avgRating} star</h4>
				<h4>{sla.deliveryTime} min</h4>
			</div>
		</div>
	);
};

export default CardComponent;
