import React from 'react'
import '../../../../img/resource.svg' 
import classes from '../MainSidebar.module.scss'
import sidebarClasses from '../MainSidebar.module.scss'

export default function BrandLink() {
    return (
        <a href="#" className={classes['brand-link']}>
            <svg alt="Resource Logo" className={classes['brand-image']}>
                <use xlinkHref={`./img/sprite.svg#resource`}></use>
            </svg>

            <span className={sidebarClasses['sliding-text']}>Ресурс</span>
        </a>
    )
}
