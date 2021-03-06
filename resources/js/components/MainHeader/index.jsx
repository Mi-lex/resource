import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './MainHeader.module.scss';
import NavBar from './NavBar';
import AlertBar from './AlertBar';
import { getIsLayoutOpen } from '../../redux/selectors';

function MainHeader({ isLayoutOpen }) {
	const navClasses = `${classes['main-header']} ${
		isLayoutOpen ? '' : classes.closed
	}`.trim();
	return (
		<nav className={navClasses}>
			<NavBar />
			<AlertBar />
		</nav>
	);
}

MainHeader.propTypes = {
	isLayoutOpen: PropTypes.bool.isRequired,
};

export default connect((state) => ({ isLayoutOpen: getIsLayoutOpen(state) }))(
	MainHeader,
);
