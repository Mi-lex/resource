import { TOGGLE_LAYOUT, CHANGE_TAB } from '../constants';

export const toggleLayout = () => ({
	type: TOGGLE_LAYOUT,
});

export const changeTab = (tabName) => ({
	type: CHANGE_TAB,
	currentTab: tabName,
});
