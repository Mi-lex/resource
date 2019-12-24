import React from 'react'
import classes from './Navbar.module.scss'
import NavToggler from '../NavToggler'
import Item from '../Item'

export default function NavBar() {
    return (
        <ul className={classes['navbar']}>
            <NavToggler/>
            <Item>Главная</Item>
            <Item href="/miltary_districts">Военные округи</Item>
        </ul>
    )
}
