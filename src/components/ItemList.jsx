import { IMG_BASE_URL } from '../constants/constant';

const ItemList = (props) => {
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
			</div>
		</div>
	);
};

export default ItemList;
