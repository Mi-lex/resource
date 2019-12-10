import React from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import mapSvg from '../../../img/icons/map.component.svg'
import classes from './RussianMap.module.scss'

export default function index() {
    return (
        <SvgLoader className={classes['map']}path='./img/icons/map.component.svg'>
            <SvgProxy selector="#uvo"/>
        </SvgLoader>
    )
}