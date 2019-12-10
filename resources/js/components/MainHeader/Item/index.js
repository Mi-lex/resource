import React from 'react'
import classes from './Item.module.scss'

export default function Item(props) {
    return (
        <li className={classes.item}>
            <a href={props.href} onClick={props.onClick} className={classes.link}>{props.children}</a>
        </li>
    )
}
