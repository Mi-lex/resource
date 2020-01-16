import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { toggleLayout } from '../../../redux/actions';
import Item from '../Item';

function NavToggler({ toggleLayout }) {
	return (
		<Item href="#" randomProp={'huy'} onClick={ toggleLayout }>
			<FontAwesomeIcon icon={faBars} />
		</Item>
	);
}

export default connect(null, { toggleLayout })(NavToggler);
