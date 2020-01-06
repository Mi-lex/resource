import React from 'react'
import { connect } from 'react-redux'
import { toggleLayout } from '../../../redux/actions'
import Item from '../Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavToggler(props) {
    return (
        <Item href="#" randomProp={'huy'} onClick={ props.toggleLayout }>
            <FontAwesomeIcon icon={faBars}/>
        </Item>
    )
}

export default connect(null, { toggleLayout })(NavToggler) 