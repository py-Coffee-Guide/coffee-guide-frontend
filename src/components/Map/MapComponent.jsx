import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';
import cn from 'classnames';

import { useGetCardsQuery } from '../../slices/apiSlice/apiSlice';

import BalloonModal from '../BalloonModal/BalloonModal';
import CardSmall from '../CardSmall/CardSmall';

import styles from './MapComponent.module.scss';
import location from '../../assets/images/location-pin.svg';
import locationActive from '../../assets/images/location-pin-active.svg';

import { changeActive } from '../../slices/cardsSlice/cardsSlice';

function MapComponent() {
	const dispatch = useDispatch();
	const card = useSelector(state => state.cards.cards);
	const [isActive, setIsActive] = useState(false);
	const [isCard, setIsCard] = useState({});
	const [place, setPlace] = useState({});

	const handleOpenBalloon = id => {
		dispatch(changeActive({ id }));
		setIsActive(true);
	};

	const handleCloseBalloon = () => {
		setIsActive(false);
		place.balloon.close();
		dispatch(changeActive({ id: '' }));
	};

	const handleClick = card => {
		setTimeout(() => {
			handleOpenBalloon(card.id);
			setIsCard(card);
			document
				.getElementById(`card/${card.id}`)
				.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
		}, 0);
	};

	return (
		<div className={styles.container}>
			<Map
				defaultState={{ center: [55.75, 37.57], zoom: 11 }}
				width="inherit"
				height="inherit"
				modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
				options={{ exitFullscreenByEsc: true, yandexMapDisablePoiInteractivity: true }}
				instanceRef={setPlace}
				onClick={handleCloseBalloon}
			>
				{card?.map(card => (
					<Placemark
						key={card.id}
						geometry={[card.address.lat, card.address.lon]}
						options={{
							preset: 'islands#circleIcon',
							iconLayout: 'default#image',
							iconImageHref: card.key === card.id && isActive ? locationActive : location,
							iconImageSize: [30, 30],
							hideIconOnBalloonOpen: false,
							balloonCloseButton: false,
						}}
						properties={{
							balloonContent: `<div id="balloon-comp" class=${styles.map_hint} ></div>`,
						}}
						onClick={() => handleClick(card)}
					/>
				))}
				<FullscreenControl options={{ visible: true }} data={{ content: '<p>BLABLABLA</p>' }} />
			</Map>
			{isActive && (
				<BalloonModal elementId="balloon-comp">
					<CardSmall card={isCard} />
				</BalloonModal>
			)}
		</div>
	);
}

export default MapComponent;
