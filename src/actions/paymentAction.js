import {
  PAYMENT_START,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  FETCH_PROFILE_SUCCESS
} from "../config/type";
import axios from "axios";

export const makePayment = token => {
  return async function(dispatch) {
    dispatch({ type: PAYMENT_START });
    try {
      const response = await axios.post("/api/payments", { token });
      const { profile } = response.data;
      if (profile) {
        dispatch({ type: PAYMENT_SUCCESS });
        dispatch({ type: FETCH_PROFILE_SUCCESS, payload: profile });
      } else {
        dispatch({ type: PAYMENT_FAIL });
      }
    } catch (error) {
      dispatch({ type: PAYMENT_FAIL });
    }
  };
};
