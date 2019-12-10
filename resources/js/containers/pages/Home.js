import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import Emblems from '../../components/Emblems'
import Aux from '../HOC'
import RussianMap from '../../components/RussianMap'

export default function Home() {
return (
	<Aux>
		<ContentHeader>Вооруженный Силы Российской Федерации</ContentHeader>
		<div className="row">
			<div className="col-2">
				<Emblems>
					{['svo', 'zvo', 'uvo']}
				</Emblems>
			</div>
			<div className="col">
				<RussianMap/>
			</div>
			<div className="col-2">
				<Emblems>
					{['cvo', 'vvo']}
				</Emblems>
			</div>
		</div>			
	</Aux>)
}
