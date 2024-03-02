import { RESTUARANTS_DETAILS } from '../constants/constant';
import { useEffect, useState } from 'react';
export const useRestraurantMenu = (resID) => {
	const [resDetails, setResDetails] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(RESTUARANTS_DETAILS + resID);
		const jsonResponse = await response.json();
		const cardList =
			jsonResponse.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
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
