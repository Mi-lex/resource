import React from 'react'
import classes from './MainHeader.module.scss'
import NavBar from './NavBar'
import AlertBar from './AlertBar'

export default function MainHeader(props) {
    const navClasses = `${classes['main-header']} ${props.isLayoutOpen ? '' : classes['closed']}`.trim();
    return (
        <nav className={navClasses}>
            <NavBar onToggle={props.onToggle}/>
            <AlertBar/>
        </nav>
    )
}