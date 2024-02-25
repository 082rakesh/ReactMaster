import { useState } from 'react';
import Button from './Button';
import { SEARCH_RESTRAUNTS_PLACEHOLDER_TEXT } from '../constants/constant';

const SearchBox = (props) => {
	const handler = () => {
		props.onSubmitAction();
	};
	return (
		<div className='flex'>
			<input
				className='p-1 border-spacing-5 border border-solid border-blue-400 mr-5 rounded'
				placeholder={SEARCH_RESTRAUNTS_PLACEHOLDER_TEXT}
				value={props.inputValue}
				onChange={(e) => props.setInputValue(e.target.value)}
			></input>
			<Button onClick={handler} title='Submit' />
		</div>
	);
};

export default SearchBox;
