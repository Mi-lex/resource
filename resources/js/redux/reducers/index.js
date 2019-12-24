import { TOGGLE_LAYOUT, CHANGE_TAB } from '../constants'

const initialState = {
    isLayoutOpen: false,
    currentTab: 'initial'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LAYOUT:
            return {
                ...state,
                'isLayoutOpen': !state.isLayoutOpen
            }
        case CHANGE_TAB:
            return {
                ...state,
                'currentTab': action.currentTab
            }
        default:
            return state
    }
}

export default rootReducer