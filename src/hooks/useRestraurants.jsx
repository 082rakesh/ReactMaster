import { RESTUARANTS_DETAILS, ALL_RESTURANTS } from '../constants/constant';
import { useEffect, useState } from 'react';
const useRestraurants = (resID) => {
	const [resDetails, setResDetails] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(RESTUARANTS_DETAILS + '77949');
		const jsonResponse = await response.json();
		const cardList =
			jsonResponse.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
				.filter(
					(c) =>
						c.card?.card?.['@type'] ===
						'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
				)
				.map((card) => card.card?.card);
		setResDetails(cardList);
	};

	return resDetails;
};

export default useRestraurants;

export const useRestraurantList = () => {
	const [restrauntList, setRestrauntList] = useState([]);

	useEffect(() => {
		fetchRestuarantList();
	}, []);

	const fetchRestuarantList = async () => {
		const response = await fetch(ALL_RESTURANTS);
		const jsonResponse = await response.json();
		const restaurants =
			jsonResponse?.data?.cards[1].card.card.gridElements.infoWithStyle
				.restaurants;
		setRestrauntList(restaurants);
	};

	return restrauntList;
};
