import {SET_NOTIFICATION, RESET_NOTIFICATION} from '../../consts/actionTypes';

const notificationsSetting = (state = {}, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                message: action.message,
                status: action.status
            }
        case RESET_NOTIFICATION:
            return {
                ...state,
                message: null,
                status: null
            }
        default:
            return state
    }
}

export default {
    notificationsSetting
}
