import {RESET_NOTIFICATION, SET_NOTIFICATION} from '../../consts/actionTypes';


export const setNotification = payload => ({
    type: SET_NOTIFICATION,
    message: payload.message,
    status: payload.status
})

export const resetNotification = () => ({
    type: RESET_NOTIFICATION
})
