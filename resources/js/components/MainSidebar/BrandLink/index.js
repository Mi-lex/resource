import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../img/resource.svg';
import classes from '../MainSidebar.module.scss';

export default function BrandLink() {
	return (
		<Link to="/" className={classes['brand-link']}>
			<svg alt="Resource Logo" className={classes['brand-image']}>
				<use xlinkHref="./img/sprite.svg#resource" />
			</svg>

			<span className={classes['sliding-text']}>Ресурс</span>
		</Link>
	);
}
