import HeaderComponent from '../../components/HeaderComponent';
import { Screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../Redux/appStore';
import { BrowserRouter } from 'react-router-dom';

it('should load header component', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<HeaderComponent />
			</Provider>
		</BrowserRouter>
	);
});
