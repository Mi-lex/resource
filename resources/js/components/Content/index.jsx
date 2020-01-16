import React from 'react';
import { connect } from 'react-redux';
import classes from './Content.module.scss';
import { getIsLayoutOpen } from '../../redux/selectors';

function Content({ isLayoutOpen, children }) {
	const contentClassName = `${classes.content} ${
		isLayoutOpen ? '' : classes.closed
	}`.trim();

	return (
		<section className={contentClassName}>
			<div className={ classes.wrapper }>{ children }</div>
		</section>
	);
}

export default connect((state) => ({ isLayoutOpen: getIsLayoutOpen(state) }))(
	Content,
);
