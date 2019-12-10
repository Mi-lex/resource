import React from 'react'
import classes from './Navbar.module.scss'
import NavToggler from '../NavToggler'
import Item from '../Item'

export default function NavBar(props) {
    return (
        <ul className={classes['navbar']}>
            <NavToggler onToggle={props.onToggle}/>
            <Item onToggle={props.toggleAction} href="#">Главная</Item>
            <Item href="/miltary_districts">Военные округи</Item>
        </ul>
    )
}
