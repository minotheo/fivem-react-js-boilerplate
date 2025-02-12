import {
  combineReducers, createStore,
} from "redux";

import mainReducer
  from "./reducers/mainSlice";

const rootReducer = combineReducers(
  {
    main: mainReducer,
  },
);

export const store = createStore(
  rootReducer,
);