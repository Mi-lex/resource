import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../../redux/actions';
import classes from './Emblems.module.scss';
import images from '../../assets/images';

const { emblemImages } = images;

function Emblems({ children, changeTab }) {
	return (
		<ul className={classes.list}>
			{children.map((emblemName) => (
				<li
					key={emblemName}
					className={classes.item}
					onClick={() => {
						changeTab(emblemName);
					}}
				>
					<img src={emblemImages[emblemName]} alt="" />
				</li>
			))}
		</ul>
	);
}

export default connect(null, { changeTab })(Emblems);
