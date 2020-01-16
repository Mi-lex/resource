import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlidingText from '../SlidingText';
import classes from './ItemLink.module.scss';

export default function ItemLink({ to, iconName, children }) {
	return (
		<li className={classes.item}>
			<Link className={classes.link} to={to}>
				<div className={classes['icon-container']}>
					<FontAwesomeIcon className={classes.icon} icon={iconName} />
				</div>
				<SlidingText>{children}</SlidingText>
			</Link>
		</li>
	);
}
