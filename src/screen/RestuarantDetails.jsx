import Shimmer from '../components/Error/Shimmer';
import { useParams } from 'react-router-dom';
import { useRestraurantMenu } from '../hooks/useRestraurantMenu';
import RestrauntList from '../components/RestrauntsList';
import { useState } from 'react';

const RestuarantDetails = () => {
	const { resId } = useParams();
	const itemCatagories = useRestraurantMenu(resId);
	const [showIndex, setShowIndex] = useState(0);

	console.log(itemCatagories);

	return itemCatagories === null ? (
		<Shimmer />
	) : (
		itemCatagories?.map((card, index) => (
			<RestrauntList
				key={index}
				catagory={card}
				showItems={index === showIndex ? true : false}
				setShowIndex={() => setShowIndex(index)}
			/>
		))
	);
};

export default RestuarantDetails;
