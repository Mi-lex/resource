import React from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import mapSvg from '../../../img/icons/map.component.svg'
import classes from './RussianMap.module.scss'
import { changeTab } from '../../redux/actions'
import { connect } from 'react-redux'
import { miltaryDistricts } from '../../constants'
import { getCurrentTab } from '../../redux/selectors'

function RussianMap(props) {
    return (
        <SvgLoader className={classes['map']} path={mapSvg}>
            <SvgProxy selector="style">{`
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
            {Object.keys(miltaryDistricts).map(miltaryDistrict => (
                <SvgProxy data-object={props.currentTab == miltaryDistrict ? 'active' : 'inactive'} 
                    key={miltaryDistrict} selector={`#${miltaryDistrict}`} onClick={
                    ev => {
                        props.changeTab(miltaryDistrict)
                    }
                }/>
            ))}
        </SvgLoader>
    )
}

export default connect(state => ({ currentTab: getCurrentTab(state)}), { changeTab })(RussianMap) 