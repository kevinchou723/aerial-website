import { ActionTypes } from "./constants"

export const setMobileMenuOpen = (isOpen) => {
    return {
        type: ActionTypes.SET_MOBILE_MENU_OPEN,
        isOpen
    }
}