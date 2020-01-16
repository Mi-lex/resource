import React from 'react';
import classes from './ContentHeader.module.scss';

export default function ContentHeader({ children }) {
	return (
		<section className={classes['header']}>
			<h1 className={classes['title']}>{ children }</h1>
		</section>
	);
}
