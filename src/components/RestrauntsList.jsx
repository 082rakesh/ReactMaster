import { useState } from 'react';
import ItemList from './ItemList';
const RestrauntList = (props) => {
	const { title, itemCards } = props.catagory;

	// https://xyz.com/restraunts

	

	// arrow function: onCLick Handler

	const onClickHandler = useCallback( () => {
		// chain to parent: sending props from child to parent

	})

	const onClickHandler1 = () => {

	}

	useMemo() //





	// componentDidMount
	// componentWillMount
	//Render
	// unmOUnt

	return (
		<div className=' bg-gray-50 w-6/12 mx-auto my-2 shadow-lg flex-col justify-between'>
			<div
				className='flex justify-between mx-auto my-2'
				onClick={onClickHandler}
			>
				<span className=' p-2 font-bold'>
					{title} ({itemCards.length})
				</span>
				<span className=' p-2'>⬇️</span>
			</div>
			{props.showItems && (
				<div>
					{itemCards.map((item) => (
						<ItemList key={item.card?.info?.id} itemList={item} />
					))}
				</div>
			)}
		</div>
	);
};
export default RestrauntList;
