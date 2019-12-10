import React from 'react'
import classes from './ContentHeader.module.scss'

export default function ContentHeader(props) {
    return (
        <section className={classes['header']}>
            <h1 className={classes['title']}>
                {props.children}
            </h1>
        </section>
    )
}
