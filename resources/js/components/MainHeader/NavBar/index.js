import React from 'react';
import NavToggler from '../NavToggler';
import Item from '../Item';
import classes from './Navbar.module.scss';

export default function NavBar() {
	return (
		<ul className={classes['navbar']}>
			<NavToggler />
			<Item>Главная</Item>
			<Item href="/miltary_districts">Военные округи</Item>
		</ul>
	);
}
