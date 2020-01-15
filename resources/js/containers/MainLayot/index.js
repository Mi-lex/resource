import React , { Fragment } from 'react'
import MainHeader from '../../components/MainHeader'
import MainSidebar from '../../components/MainSidebar'

export default function MainLayout() {
    return (
        <Fragment>
           <MainHeader/> 
           <MainSidebar/>
        </Fragment>
    )
}
