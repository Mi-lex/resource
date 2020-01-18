import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import options from './chartOptions';

const randomInt = (max) => (max * Math.random()).toFixed(1);

const getInitialData = () => ({
	labels: ['CФ', 'ЮВО', 'ЗВО', 'ЦВО', 'ВВО'],
	datasets: [
		{
			data: Array(5)
				.fill(null)
				.map(() => randomInt(1000)),
			backgroundColor: ['#78b3ff', '#d6a477', '#ff8080', '#b3ff80', '#fec82c'],
		},
	],
});

export default function DoughnutChart() {
	return <Doughnut data={getInitialData()} options={options} />;
}
