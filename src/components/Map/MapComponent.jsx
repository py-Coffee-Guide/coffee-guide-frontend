import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';
import cn from 'classnames';

import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';
import BalloonModal from '../BalloonModal/BalloonModal';
import CardSmall from '../CardSmall/CardSmall';

import { cardsArray } from '../../utils/cardsArray';

import styles from './MapComponent.module.scss';
import location from '../../assets/images/location-pin.svg';

function MapComponent() {
	const [isZoom, setIsZoom] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isCard, setIsCard] = useState({});
	const [place, setPlace] = useState({});
	const [zoom, setZoom] = useState();
	const mapContainerClassName = cn(styles.container);
	const card = useSelector(state => state.queries.getCards.data);

	const handleZoom = () => {
		setIsZoom(!isZoom);
		zoom.enterFullscreen();
	};

	const handleOpenBalloon = () => {
		setIsActive(true);
	};

	const handleCloseBalloon = () => {
		setIsActive(false);
		place.balloon.close();
	};

	console.log(card);
	return (
		<div className={mapContainerClassName}>
			<Map
				defaultState={{ center: [55.75, 37.57], zoom: 11 }}
				width="inherit"
				height="inherit"
				modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
				options={{ exitFullscreenByEsc: true, yandexMapDisablePoiInteractivity: true }}
				instanceRef={setPlace}
				onClick={handleCloseBalloon}
			>
				{card.results.map(card => (
					<Placemark
						key={card.id}
						geometry={[card.address.lat, card.address.lon]}
						options={{
							preset: 'islands#circleIcon',
							iconLayout: 'default#image',
							iconImageHref: location,
							iconImageSize: [30, 30],
							hideIconOnBalloonOpen: false,
							balloonCloseButton: false,
						}}
						properties={{
							balloonContent: `<div id="balloon-comp" class=${styles.map_hint} ></div>`,
						}}
						onClick={() => {
							setTimeout(() => {
								handleOpenBalloon();
								setIsCard(card);
							}, 0);
						}}
					/>
				))}
				<FullscreenControl
					options={{ visible: true }}
					instanceRef={setZoom}
					data={{ content: '<p>BLABLABLA</p>' }}
				/>
			</Map>
			{/* <MapButton click={handleZoom} /> */}
			{isActive && (
				<BalloonModal elementId="balloon-comp">
					<CardSmall card={isCard} />
				</BalloonModal>
			)}
		</div>
	);
}

export default MapComponent;
