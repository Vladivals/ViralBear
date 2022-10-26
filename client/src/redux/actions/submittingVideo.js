import emailjs from "emailjs-com";

import {
  FAILED_SUBMITTING,
  SET_VIDEO_COST,
  START_SUBMITTING,
  SUCCESSFUL_SUBMITTING,
} from "../../consts/actionTypes";
import { resetNotification, setNotification } from "./settingNotifications";

export const submitVideo =
  ({ mainInfo }) =>
  (dispatch) => {
    dispatch(startSubmittingVideo());
    emailjs
      .send(
        "service_yirp2bd",
        "template_2ujb4r4",
        {
          ...mainInfo,
          contract_link: `www.viralbear.ru/contract/${JSON.stringify(
            mainInfo
          )}`,
        },
        "user_tBk4d6fTc4EteI70sttN6"
      )
      .then(
        () => {
          dispatch(successfulSubmittingVideo());
          dispatch(setNotification({message: "Done", status: "200"}));
        },
        (error) => {
          dispatch(failedSubmittingVideo(error));
        }
      ).then(
        dispatch(resetNotification())

      )
  };

/*     ACTIONS     */

export const startSubmittingVideo = () => ({
  type: START_SUBMITTING,
});

export const successfulSubmittingVideo = () => ({
  type: SUCCESSFUL_SUBMITTING,
});

export const failedSubmittingVideo = (payload) => ({
  type: FAILED_SUBMITTING,
  payload,
});

export const setVideoCost = (payload) => ({
  type: SET_VIDEO_COST,
  payload,
});
