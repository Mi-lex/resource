import React from 'react';
import { Link } from 'react-router-dom';
import classes from './UserPanel.module.scss';
import avatar from '../../../../img/miltary-avatar.png';
import sidebarClasses from '../MainSidebar.module.scss';

export default function UserPanel() {
	return (
		<div className={`${classes['user-panel']} mt-3 pb-3 mb-3 d-flex`}>
			<div className={classes['image-container']}>
				<img src={avatar} className={classes.image} alt="User" />
			</div>
			<div className={`${classes.info} ${sidebarClasses['sliding-text']}`}>
				<Link to="/profile" className={classes.name}>
					Должностное лицо
				</Link>
			</div>
		</div>
	);
}
