import React from 'react';
import ConsumptionBox from '../../ConsumptionBox';
import classes from './Content.module.scss';
import DoughnutChart from './DoughnutChart';

export default function Content() {
	const legendItemList = {
		'Северный флот': 'blue',
		'Западный военный округ': 'red',
		'Южный военный округ': 'brown',
		'Центральный военный округ': 'green',
		'Восточный военный округ': 'yellow',
	};

	return (
		<div className={classes.content}>
			<div className={`row ${classes['section-list']}`}>
				<div className={`col-4 ${classes.section}`}>
					<ConsumptionBox type="water">10000</ConsumptionBox>

					<div className="row">
						<div className="col">
							<DoughnutChart />
						</div>
					</div>
				</div>

				<div className={`col-4 ${classes.section}`}>
					<ConsumptionBox type="electricity">10000</ConsumptionBox>

					<div className="row">
						<div className="col">
							<DoughnutChart />
						</div>
					</div>
				</div>

				<div className={`col-4 ${classes.section}`}>
					<ConsumptionBox type="heat">10000</ConsumptionBox>

					<div className="row">
						<div className="col">
							<DoughnutChart />
						</div>
					</div>
				</div>
			</div>
			{/* Legend */}
			<div className="row">
				<ul className={classes['chart-legend']}>
					{Object.entries(legendItemList).map(([name, borderColor]) => (
						<li
							key={name}
							className={`${classes['legend-item']} ${
								classes[`legend-item--${borderColor}-border`]
							}`}
						>
							{name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
