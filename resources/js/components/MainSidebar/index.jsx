import React from 'react';
import { connect } from 'react-redux';
import classes from './MainSidebar.module.scss';
import Brandlink from './BrandLink';
import Container from './Container';
import { getIsLayoutOpen } from '../../redux/selectors';

function MainSidebar({ isLayoutOpen }) {
	const mainSideBarClassName = `${classes['main-sidebar']} ${
		isLayoutOpen ? '' : classes.closed
	}`.trim();

	return (
		<aside className={mainSideBarClassName}>
			<Brandlink />
			<Container />
		</aside>
	);
}

export default connect((state) => ({ isLayoutOpen: getIsLayoutOpen(state) }))(
	MainSidebar,
);
