import React from 'react';
import { connect } from 'react-redux';
import classes from '../Navigation.module.scss';
import { getCurrentTab } from '../../../../redux/selectors';
import { changeTab } from '../../../../redux/actions';

function Item({ className, itemTabName, changeTab, currentTab, children }) {
	let itemClassNames = [classes.item];
	if (className) {
		itemClassNames = itemClassNames.concat(className.split(' '));
	}

	if (itemTabName === currentTab) {
		itemClassNames.push(classes['item--active']);
	}

	return (
		<li
			className={itemClassNames.join(' ')}
			onClick={() => {
				changeTab(itemTabName);
			}}
		>
			<button type="button" className={classes.btn}>{children}</button>
		</li>
	);
}

export default connect((state) => ({ currentTab: getCurrentTab(state) }), {
	changeTab,
})(Item);
