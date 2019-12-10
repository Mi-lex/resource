const TOGGLE_LAYOUT = 'TOGGLE_LAYOUT'
const CHANGE_TAB = 'CHANGE_TAB'

export const toggleLayout = () => ({
    'type': TOGGLE_LAYOUT
})

export const changeTab = (tabName) => ({
    'type': CHANGE_TAB,
    'currentTab': tabName
})

