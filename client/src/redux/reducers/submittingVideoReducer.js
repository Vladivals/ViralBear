import {
  FAILED_SUBMITTING,
  START_SUBMITTING,
  SUCCESSFUL_SUBMITTING,
  SET_VIDEO_COST,
} from "../../consts/actionTypes";

const videoSubmitting = (state = {}, action) => {
  switch (action.type) {
    case SET_VIDEO_COST:
      return {
        ...state,
        cost: action.payload,
      };
    case START_SUBMITTING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESSFUL_SUBMITTING:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FAILED_SUBMITTING:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default {
  videoSubmitting,
};
