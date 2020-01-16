import React from 'react';
import classes from './Item.module.scss';

export default function Item({ href, onClick, children }) {
	return (
		<li className={classes.item}>
			<a href={href} onClick={onClick} className={classes.link}>
				{children}
			</a>
		</li>
	);
}
