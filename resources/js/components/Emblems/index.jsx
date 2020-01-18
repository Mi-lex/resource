import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../../redux/actions';
import classes from './Emblems.module.scss';
import images from '../../assets/images';

const { emblemImages } = images;

function Emblems({ children, changeTab }) {
	return (
		<ul className={classes.list}>
			{children.map((emblemName) => (
				<button
					type="button"
					key={emblemName}
					className={classes.item}
					onClick={() => {
						changeTab(emblemName);
					}}
				>
					<img src={emblemImages[emblemName]} alt={emblemName} />
				</button>
			))}
		</ul>
	);
}

Emblems.propTypes = {
	children: PropTypes.arrayOf(PropTypes.string).isRequired,
	changeTab: PropTypes.func.isRequired,
};

export default connect(null, { changeTab })(Emblems);
