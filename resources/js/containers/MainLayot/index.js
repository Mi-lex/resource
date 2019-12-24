import React from 'react'
import MainHeader from '../../components/MainHeader'
import MainSidebar from '../../components/MainSidebar'
import Aux from '../HOC'

export default function MainLayout() {
    return (
        <Aux>
           <MainHeader/> 
           <MainSidebar/>
        </Aux>
    )
}
