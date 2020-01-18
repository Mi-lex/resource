import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from '../Navigation.module.scss';
import { getCurrentTab } from '../../../../redux/selectors';
import { changeTab } from '../../../../redux/actions';

function Item({
	className, itemTabName, changeTab, currentTab, children,
}) {
	let itemClassNames = [classes.item];
	if (className) {
		itemClassNames = itemClassNames.concat(className.split(' '));
	}

	if (itemTabName === currentTab) {
		itemClassNames.push(classes['item--active']);
	}

	return (
		<li className={itemClassNames.join(' ')}>
			<button
				type="button"
				onClick={() => {
					changeTab(itemTabName);
				}}
				className={classes.btn}
			>
				{children}
			</button>
		</li>
	);
}

Item.propTypes = {
	className: PropTypes.string,
	itemTabName: PropTypes.string.isRequired,
	currentTab: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	changeTab: PropTypes.func.isRequired,
};

Item.defaultProps = {
	className: '',
};

export default connect((state) => ({ currentTab: getCurrentTab(state) }), {
	changeTab,
})(Item);
