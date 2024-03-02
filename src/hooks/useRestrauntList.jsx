import { useEffect, useState } from 'react';
import { ALL_RESTURANTS } from '../constants/constant';

export const useRestrauntList = () => {
	const [listOfResturants, setListOfResturants] = useState([]);

	useEffect(() => {
		fetchRestuarants();
	}, []);

	const fetchRestuarants = async () => {
		const response = await fetch(ALL_RESTURANTS);
		const jsonResponse = await response.json();
		const resturants =
			jsonResponse?.data?.cards[1].card.card.gridElements.infoWithStyle
				.restaurants;
		setListOfResturants(resturants);
	};

	return listOfResturants;
};
