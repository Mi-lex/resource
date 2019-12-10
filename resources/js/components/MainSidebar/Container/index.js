import React from 'react'
import UserPanel from '../UserPanel'
import classes from '../MainSidebar.module.scss'
import Navbar from '../Navbar'

export default function Container() {
    return (
        <div className={classes['container']}>
            <UserPanel/>
            <Navbar/>
        </div>
    )
}
