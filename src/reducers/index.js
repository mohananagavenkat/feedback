import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { paymentReducer } from "./paymentReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  payments: paymentReducer
});
