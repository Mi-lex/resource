import React from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ItemLink from '../ItemLink';
import classes from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className="mt-1">
			<ul
				className={`${classes.list} flex-column`}
				data-widget="treeview"
				role="menu"
				data-accordion="false"
			>
				<ItemLink iconName={faBell} to="/public">
					Округи
				</ItemLink>
				<ItemLink iconName={faBell} to="/buildings">
					Здания
				</ItemLink>
				<ItemLink iconName={faBell} to="/meters">
					Устройства
				</ItemLink>
			</ul>
		</nav>
	);
}
