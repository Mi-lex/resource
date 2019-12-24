import React from 'react'
import classes from './MainSidebar.module.scss'
import Brandlink from './BrandLink'
import Container from './Container'
import { connect } from 'react-redux'
import { getIsLayoutOpen } from '../../redux/selectors'

function MainSidebar(props) {
    const mainSideBarClassName = `${classes['main-sidebar']} ${props.isLayoutOpen ? "" : classes['closed']}`.trim();

    return (
        <aside className={mainSideBarClassName}>
            <Brandlink />
            <Container/> 
        </aside>
    )
}

export default connect( state => ({ isLayoutOpen: getIsLayoutOpen(state) }) )(MainSidebar) 