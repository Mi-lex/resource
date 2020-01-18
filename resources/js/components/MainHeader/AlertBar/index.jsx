import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import classes from './AlertBar.module.scss';
import Item from '../Item';

export default function AlertBar() {
	return (
		<ul className={`${classes.alertbar} ml-auto`}>
			<Item href="#">
				<FontAwesomeIcon icon={faBell} />
				<span className={classes.badge}>3</span>
			</Item>
		</ul>
	);
}
