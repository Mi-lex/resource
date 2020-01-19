import React from 'react';
import MiltaryObject from '../../../components/MiltaryObject';
import ContentHeader from '../../../components/ContentHeader';

export default function District() {
	return (
		<>
			<ContentHeader>Западный военный округ</ContentHeader>
			<section className="row">
				<MiltaryObject
					title="Военная академия связи имени С. М. Будённого"
					address="Тихорецкий пр., 3, Санкт-Петербург"
				/>
			</section>
		</>
	);
}
