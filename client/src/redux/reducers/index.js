import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import submittingVideo from './submittingVideoReducer';
import sendingContacts from './sendingContactsReducer';
import settingNotifications from './settingNotificationsReducer';

export const reducers = combineReducers(
    Object.assign(
        {},
        {
            ...submittingVideo,
            ...sendingContacts,
            ...settingNotifications
        },
        {routing: routerReducer}
    )
);
