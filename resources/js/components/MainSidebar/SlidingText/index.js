import React from 'react'
import classes from '../MainSidebar.module.scss'

const slidingTextStyle = {
    display: 'inline-block',
    margin: 0
}

export default function SlidingText(props) {
    return (
        <p style={slidingTextStyle} className={classes['sliding-text']}>{props.children}</p>
    )
}
