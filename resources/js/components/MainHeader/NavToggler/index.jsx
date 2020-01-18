import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { toggleLayout } from '../../../redux/actions';
import classes from '../Item/Item.module.scss';

function NavToggler({ toggleLayout }) {
	return (
		<li className={classes.item}>
			<button type="button" className={classes.link} onClick={toggleLayout}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</li>
	);
}

NavToggler.propTypes = {
	toggleLayout: PropTypes.func.isRequired,
};

export default connect(null, { toggleLayout })(NavToggler);
