import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import './index.scss';

import App from './components/App/App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename="/coffee-guide-frontend/">
		<Provider store={store}>
			<YMaps query={{ apikey: '', lang: 'ru_RU' }}>
				<App />
			</YMaps>
		</Provider>
	</BrowserRouter>,
);
