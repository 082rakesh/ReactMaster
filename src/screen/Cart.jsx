import { useSelector } from 'react-redux';
import ItemList from '../components/ItemList';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return cartItems === null ? (
		<Shimmer />
	) : (
		<div className='flex w-6/12 mx-auto '>
			<div>
				{cartItems?.map((item, index) => (
					<ItemList key={item.card?.info?.id + index} itemList={item} />
				))}
			</div>
		</div>
	);
};

export default Cart;
