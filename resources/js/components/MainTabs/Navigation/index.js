import React from 'react'
import classes from './Navigation.module.scss'
import Item from './Item'
import { miltaryDistricts } from '../../../constants'

export default function Navigation() {
    return (
        <ul className={classes.list}>
            <Item itemTabName="initial" className={classes['item--left']}>
                Вооружённые Силы Российской Федерации
            </Item>
            {Object.entries(miltaryDistricts).map(([tabName, districtName]) => (
                <Item key={tabName} itemTabName={tabName}>
                    {districtName}
                </Item>
            ))}
        </ul>
    )
}
