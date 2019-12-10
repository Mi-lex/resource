import React from 'react'
import classes from './Content.module.scss'

export default function Content(props) {
    const contentClassName = `${classes['content']} ${props.isLayoutOpen ? "" : classes['closed']}`.trim();
    return (
        <section className={contentClassName}>
            <div className={classes['wrapper']}>
                {props.children}
            </div>
        </section>
    )
}
