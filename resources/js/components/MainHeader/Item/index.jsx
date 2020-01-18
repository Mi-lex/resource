import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Item.module.scss';

export default function Item({ href, children }) {
	return (
		<li className={classes.item}>
			<Link to={href} className={classes.link}>
				{children}
			</Link>
		</li>
	);
}

Item.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.element)
	]).isRequired,
};