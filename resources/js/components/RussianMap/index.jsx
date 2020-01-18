import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapSvg from '../../../img/icons/map.component.svg';
import classes from './RussianMap.module.scss';
import { changeTab } from '../../redux/actions';
import { miltaryDistricts } from '../../constants';
import { getCurrentTab } from '../../redux/selectors';

function RussianMap({ currentTab, changeTab }) {
	return (
		<SvgLoader className={classes.map} path={mapSvg}>
			<SvgProxy selector="style">
				{`
                [data-object="inactive"] {
                    opacity: 0.5;
                    cursor: pointer;
                }aw
                [data-object="active"],
                [data-object="inactive"]:hover {
                    stroke-width: 1.5;
                    opacity: 1;
                }`}
			</SvgProxy>
			{Object.keys(miltaryDistricts).map((miltaryDistrict) => (
				<SvgProxy
					data-object={currentTab === miltaryDistrict ? 'active' : 'inactive'}
					key={miltaryDistrict}
					selector={`#${miltaryDistrict}`}
					onClick={() => {
						changeTab(miltaryDistrict);
					}}
				/>
			))}
		</SvgLoader>
	);
}

RussianMap.propTypes = {
	currentTab: PropTypes.string.isRequired,
	changeTab: PropTypes.func.isRequired,
};

export default connect((state) => ({ currentTab: getCurrentTab(state) }), {
	changeTab,
})(RussianMap);
