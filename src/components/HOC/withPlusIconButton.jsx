import Button from '../Button';
const withPlusIconButton = (Button) => {
	return (props) => {
		return (
			<div className='bg-blue-500'>
				<Button {...props} />
				<span className=' p-2'>➕</span>
			</div>
		);
	};
};

export default withPlusIconButton;
