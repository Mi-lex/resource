import React from 'react'
import classes from './Content.module.scss'
import { getIsLayoutOpen } from '../../redux/selectors'
import { connect } from 'react-redux'

function Content(props) {
    const contentClassName = `${classes['content']} ${props.isLayoutOpen ? "" : classes['closed']}`.trim();

    return (
        <section className={contentClassName}>
            <div className={classes['wrapper']}>
                {props.children}
            </div>
        </section>
    )
}

export default connect( state => ({ isLayoutOpen: getIsLayoutOpen(state) }) )(Content) 