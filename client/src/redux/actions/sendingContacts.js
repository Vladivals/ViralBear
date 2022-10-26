import emailjs from 'emailjs-com';

import {
  FAILED_SENDING_CONTACTS,
  START_SENDING_CONTACTS,
  SUCCESSFUL_SENDING_CONTACTS,
} from '../../consts/actionTypes';

export const sendContacts =
  ({ mainInfo }) =>
  (dispatch) => {
    dispatch(startSendingContacts());
    emailjs
      .send(
        'service_yirp2bd',
        'template_tyhhmv6',
        mainInfo,
        'user_tBk4d6fTc4EteI70sttN6'
      )
      .then(
        () => {
          dispatch(successfulSendingContacts());
        },
        (error) => {
          dispatch(failedSendingContacts(error));
        }
      );
  };

/*     ACTIONS     */

export const startSendingContacts = () => ({
  type: START_SENDING_CONTACTS,
});

export const successfulSendingContacts = () => ({
  type: SUCCESSFUL_SENDING_CONTACTS,
});

export const failedSendingContacts = (payload) => ({
  type: FAILED_SENDING_CONTACTS,
  payload,
});
