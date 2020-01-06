import React from 'react'
import { emblemImages } from '../../assets/images'
import classes from './Emblems.module.scss'
import { changeTab } from '../../redux/actions'
import { connect } from 'react-redux'

function Emblems(props) {
    return (
        <ul className={classes['list']}>
            {props.children.map(emblemName => (
              <li key={emblemName} className={classes['item']} onClick={ ev => {
                props.changeTab(emblemName)
              }}>
                <img src={emblemImages[emblemName]} alt=""/>
              </li>
            ))}
        </ul>
    )
}

export default connect(null, { changeTab })(Emblems) 