import React from 'react'
import Item from '../Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavToggler(props) {
    return (
        <Item href="#" randomProp={'huy'} onClick={props.onToggle} icon={faBars}>
            <FontAwesomeIcon icon={faBars}/>
        </Item>
    )
}
