import React from 'react'
import classes from '../Navigation.module.scss'
import { connect } from 'react-redux'
import { getCurrentTab } from '../../../../redux/selectors'
import { changeTab } from '../../../../redux/actions'

function Item(props) {
    let itemClassNames = [classes.item]
    if(props.className) itemClassNames = itemClassNames.concat(props.className.split(' '))

    if (props.itemTabName == props.currentTab) itemClassNames.push(classes['item--active'])

    return (
        <li className={itemClassNames.join(' ')} onClick={ ev => {
            props.changeTab(props.itemTabName)
        }}>
            <button className={classes.btn}>{props.children}</button>
        </li>
    )
}

export default connect(state => ({ currentTab: getCurrentTab(state)}), { changeTab })(Item)