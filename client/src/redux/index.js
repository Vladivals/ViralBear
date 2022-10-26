import { applyMiddleware, compose, createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";

import history from "../utils/history";
import { reducers } from "./reducers";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducers,
  {
    videoSubmitting: {
      loading: false,
      percent: 0,
      error: null,
      cost: "0",
    },
    contactsSending: {
      error: null,
    },
    notificationsSetting: {
      message: null,
      status: null,
    },
  },
  composeEnhancers(applyMiddleware(ReduxPromise, thunk))
);

const synthHistory = syncHistoryWithStore(history, store);
export { store, synthHistory };
