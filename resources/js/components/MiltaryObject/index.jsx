import React from 'react';
import PropTypes from 'prop-types';
import ConsumptionBox from '../ConsumptionBox';
import classes from './MiltaryObject.module.scss';

export default function MiltaryObject({ title, address }) {
	return (
		<div className={`${classes.object} col-4`}>
			<a
				href="/objects/1"
				className={classes['image-container']}
				style={{
					backgroundColor: 'grey',
				}}
			>
				<header className={classes.header}>
					<h2 className={classes.title}>{title}</h2>
					<p className={classes.address}>{address}</p>
				</header>
				<img
					// src={`./build/img/objects/${id}.jpg`}
					alt={title}
					className={classes.image}
				/>
			</a>

			<div className={classes.content}>
				<div className={classes.info}>
					<ul className={classes['info-list']}>
						<li className={classes['info-item']}>
							<strong className={classes['info-value']}>0</strong>
							<span className={classes['info-label']}>Объектов</span>
						</li>
						<li className={classes['info-item']}>
							<strong className={classes['info-value']}>0</strong>
							<span className={classes['info-label']}>Счетчиков</span>
						</li>
					</ul>
				</div>
				<div className="consumptions">
					<ul className={classes['consumptions-list']}>
						<ConsumptionBox type="water">10000</ConsumptionBox>
						<ConsumptionBox type="electricity">10000</ConsumptionBox>
						<ConsumptionBox type="heat">10000</ConsumptionBox>
					</ul>
				</div>
			</div>
		</div>
	);
}

MiltaryObject.propTypes = {
	title: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
};
