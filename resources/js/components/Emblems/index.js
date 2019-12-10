import React from 'react'
import { emblemImages } from '../../assets/images'
import classes from './Emblems.module.scss'

export default function Emblems(props) {
    return (
        <ul className={classes['list']}>
            {props.children.map(emblemName => (
              <li key={emblemName} className={classes['item']}>
                <img src={emblemImages[emblemName]} alt=""/>
              </li>
            ))}
        </ul>
    )
}
