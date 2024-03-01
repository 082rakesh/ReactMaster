import { IMG_BASE_URL } from '../constants/constant';
import Button from './Button';
import withPlus from './HOC/withPlus';
import { UseDispatch, useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';

const ItemList = (props) => {
	const AddButton = withPlus(Button);
	const dispatch = useDispatch();

	const addItemHandler = () => {
		console.log('add Item');
		// Dispatch action
		dispatch(addItem(props.itemList));
	};

	console.log(
		'props.itemList.card?.info.name' + props.itemList.card?.info.name
	);
	return (
		<div className='p-2 m-2, border-gray-400 border-b-2 flex justify-between'>
			<div className=' p-2 w-10/12 '>
				<div>
					<span className=' font-bold'>
						{props.itemList.card?.info.name} -{' '}
					</span>
					<span className=' font-bold'>
						₹ {props.itemList.card?.info.price / 100}
					</span>
				</div>
				<p className='text-xs mt-2'>{props.itemList.card?.info?.description}</p>
			</div>

			<div className='w-2/12'>
				<img
					className=' w-full'
					src={IMG_BASE_URL + props.itemList.card?.info.imageId}
				/>
				<AddButton onClick={addItemHandler} title='add' />
			</div>
		</div>
	);
};

export default ItemList;
