import { useEffect, useMemo, useState } from 'react';
import { ALL_RESTURANTS } from '../constants/constant';
import Button from '../components/Button';
import Shimmer from '../components/Error/Shimmer';
import SearchBox from '../components/SearchBox';
import CardComponent from '../components/CardComponent';
import { Link } from 'react-router-dom';
import withPromotedLabel from '../components/HOC/withPromotedLabel';
import { useRestrauntList } from '../hooks/useRestrauntList';

const Home = () => {
	const [listOfResturants, setListOfResturant] = useState([]);
	const [searchedRest, setSearchedRest] = useState([]);
	const [searchedValue, setSearchedValue] = useState('');

	const PromotedRestrauntCard = withPromotedLabel(CardComponent);

	// custom hooks to fetch restraunts to show in the home page. Seperated API fetch call to maintain single responsibility
	const restrauntsList = useRestrauntList();
	updateList(restrauntsList);

	function updateList(restraunts) {
		const updateData = useMemo(() => {
			setListOfResturant(restrauntsList);
			setSearchedRest(restrauntsList);
		}, [restraunts]);
	}

	const onFilterHandler = () => {
		const filteredList = listOfResturants.filter(
			(res) => res.info.avgRating > 4
		);
		setListOfResturant(filteredList);
	};

	const onSubmitHandler = () => {
		const searchedRestraunts = listOfResturants.filter(
			(restraunt) =>
				restraunt.info.name.toLowerCase() === searchedValue.toLowerCase()
		);
		setSearchedRest(searchedRestraunts);
	};

	return listOfResturants.length == 0 ? (
		<Shimmer />
	) : (
		<div>
			<div className='flex m-5 h-10 justify-around'>
				<Button onClick={onFilterHandler} title='Filter' />
				<SearchBox
					inputValue={searchedValue}
					setInputValue={setSearchedValue}
					onSubmitAction={onSubmitHandler}
				/>
			</div>
			<div className='flex flex-wrap'>
				{searchedRest.map((resturant) => (
					<Link
						key={resturant.info.id}
						to={'/restuarants/' + resturant.info.id}
					>
						{resturant.info.name.toLowerCase() === 'pizza hut' ? (
							<PromotedRestrauntCard resData={resturant} />
						) : (
							<CardComponent resData={resturant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
