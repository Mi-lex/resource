import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShower,
	faPlug,
	faThermometerHalf,
} from '@fortawesome/free-solid-svg-icons';
import classes from './ConsumptionBox.module.scss';

const boxTypes = {
	water: {
		title: 'Холодная вода',
		units:
			<span>
				м
				<sup>
					3
				</sup>
			</span>,
		color: 'blue',
		icon: faShower,
	},
	electricity: {
		title: 'Электроэнергия',
		units: <span>кВт-ч</span>,
		color: 'orange',
		icon: faPlug,
	},
	heat: {
		title: 'Тепловая энергия',
		units: <span>ГКал</span>,
		color: 'red',
		icon: faThermometerHalf,
	},
};

export default function ConsumptionBox({ type, children }) {
	const box = boxTypes[type];

	const getCurrentDate = () => {
		const d = new Date();

		const getTwoNubered = (int) => (`0${int}`).slice(-2);

		return `${getTwoNubered(d.getDate())}.${getTwoNubered(
			d.getMonth() + 1,
		)}.${d.getFullYear()}`;
	};

	return (
		<div className={`${classes.box} ${classes[`box--${box.color}`]}`}>
			<div className={classes.icon}>
				<FontAwesomeIcon icon={box.icon} />
			</div>

			<div className={classes.content}>
				<h3 className={classes.title}>{box.title}</h3>
				<strong className={classes.value}>
					{`${children} `}
					{ box.units }
				</strong>

				<span className={classes.date}>{getCurrentDate()}</span>
			</div>
		</div>
	);
}

ConsumptionBox.propTypes = {
	type: PropTypes.oneOf(['water', 'heat', 'electricity']).isRequired,
	children: PropTypes.string.isRequired,
};
