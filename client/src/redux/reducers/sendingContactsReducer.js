import {
    START_SENDING_CONTACTS,
    SUCCESSFUL_SENDING_CONTACTS,
    FAILED_SENDING_CONTACTS
} from '../../consts/actionTypes';

const contactsSending = (state = {}, action) => {
    switch (action.type) {
        case START_SENDING_CONTACTS:
            return {
                ...state,
                error: null
            }
        case SUCCESSFUL_SENDING_CONTACTS:
            return {
                ...state,
                error: null
            }
        case FAILED_SENDING_CONTACTS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default {
    contactsSending
}
