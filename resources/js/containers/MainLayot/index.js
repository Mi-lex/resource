import React from 'react'
import MainHeader from '../../components/MainHeader'
import MainSidebar from '../../components/MainSidebar'
import Aux from '../HOC'

export default function MainLayout(props) {
    console.log(props)
    return (
        <Aux>
           <MainHeader isLayoutOpen={props.isLayoutOpen} onToggle={props.toggleAction}/> 
           <MainSidebar isLayoutOpen={props.isLayoutOpen}/>
        </Aux>
    )
}
