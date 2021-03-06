import { combineReducers } from "redux";
import type { Dispatch } from "redux";

import { routerReducer } from "react-router-redux";

import auth from "./modules/auth";
import registrationItems from "./modules/equipment";
import websockets from "./modules/websockets";

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  registrationItems,
  websockets
});

export default rootReducer;

export type Thunk<A> = (dispatch: Dispatch<A>, getState: () => Object) => any;
