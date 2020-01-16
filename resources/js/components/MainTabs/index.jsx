import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import classes from './MainTabs.module.scss';

export default function MainTabs() {
	return (
		<div className={classes.tabs}>
			<Navigation />
			<Content />
		</div>
	);
}
