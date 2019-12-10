import React from 'react'
import classes from './ItemLink.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SlidingText from '../SlidingText'

export default function ItemLink(props) {
    return (
        <li className={classes.item}>
            <Link href="#" className={classes.link} to={props.to}>
                <div className={classes['icon-container']}>
                    <FontAwesomeIcon className={classes["icon"]} icon={props.iconName}/>
                </div>
                <SlidingText>{props.children}</SlidingText>
            </Link>
        </li>
    )
}
