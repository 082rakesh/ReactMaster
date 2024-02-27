import CardComponent from '../CardComponent';
const withPromotedLabel = (CardComponent) => {
	return (props) => {
		return (
			<div>
				<label className=' absolute bg-black text-white ml-5 mt-1 p-1 rounded-lg'>
					Promoted
				</label>
				<CardComponent {...props} />
			</div>
		);
	};
};

export default withPromotedLabel;

{
	/* 
		Higher order component is a simple java script function which take component as input and 
		return an enhanced version of that component. A HOC is a pure function with zero side-effects..
	
	*/
}
