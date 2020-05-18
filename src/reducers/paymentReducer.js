import { PAYMENT_START, PAYMENT_FAIL, PAYMENT_SUCCESS } from "../config/type";
export const paymentReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case PAYMENT_START:
      return {
        ...state,
        loading: true,
        status: false,
        error: null
      };
    case PAYMENT_FAIL:
      return {
        ...state,
        loading: false,
        status: false,
        error: action.error
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: true,
        error: null
      };
    default:
      return state;
  }
};
