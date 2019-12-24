import React from 'react'
import Item from '../Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { toggleLayout } from '../../../redux/actions'
import { connect } from 'react-redux'

function NavToggler(props) {
    return (
        <Item href="#" randomProp={'huy'} onClick={() => {
            props.toggleLayout()
        }} icon={faBars}>
            <FontAwesomeIcon icon={faBars}/>
        </Item>
    )
}

export default connect(null, { toggleLayout })(NavToggler) 