import { ActionTypes } from './constants';

const INITIAL_STATE = {
    isMobileMenuOpen: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_MOBILE_MENU_OPEN:
            return {
                ...state,
                isMobileMenuOpen: action.isOpen,
            }
        default:
            return state
    }
}