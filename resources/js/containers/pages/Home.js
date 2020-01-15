import React, { Fragment } from 'react'
import ContentHeader from '../../components/ContentHeader'
import Emblems from '../../components/Emblems'
import RussianMap from '../../components/RussianMap'
import MainTabs from '../../components/MainTabs'
import { miltaryDistricts } from '../../constants'

const districtsArray = Object.keys(miltaryDistricts)
const firstHalfDistricts = districtsArray.slice(0, 3)
const secondHalfDistricts = districtsArray.slice(3)

export default function Home() {
return (
	<Fragment>
		<ContentHeader>Вооруженный Силы Российской Федерации</ContentHeader>
		<div className="row">
			<div className="col-2">
				<Emblems>
					{firstHalfDistricts}
				</Emblems>
			</div>
			<div className="col">
				<RussianMap/>
			</div>
			<div className="col-2">
				<Emblems>
					{secondHalfDistricts}
				</Emblems>
			</div>
		</div>			
		<MainTabs/>	
	</Fragment>)
}