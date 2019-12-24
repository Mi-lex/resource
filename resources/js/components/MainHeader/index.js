import React from 'react'
import classes from './MainHeader.module.scss'
import NavBar from './NavBar'
import AlertBar from './AlertBar'
import { connect } from 'react-redux'
import { getIsLayoutOpen } from '../../redux/selectors'

function MainHeader(props) {
    const navClasses = `${classes['main-header']} ${props.isLayoutOpen ? '' : classes['closed']}`.trim();
    return (
        <nav className={navClasses}>
            <NavBar/>
            <AlertBar/>
        </nav>
    )
}

export default connect( state => ({ isLayoutOpen: getIsLayoutOpen(state) }) )(MainHeader) 