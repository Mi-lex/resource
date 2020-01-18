import React from 'react';
import PropTypes from 'prop-types';
import classes from '../MainSidebar.module.scss';

const slidingTextStyle = {
	display: 'inline-block',
	margin: 0,
};

export default function SlidingText({ children }) {
	return (
		<p style={slidingTextStyle} className={classes['sliding-text']}>
			{children}
		</p>
	);
}

SlidingText.propTypes = {
	children: PropTypes.string.isRequired,
};