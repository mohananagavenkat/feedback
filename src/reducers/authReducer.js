import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL
} from "../config/type";
export const authReducer = (state = {}, action) => {
  console.log("[Auth Reducer]", action);
  switch (action.type) {
    case FETCH_PROFILE_START:
      return {
        ...state,
        loading: true,
        status: false
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: true,
        profile: action.payload
      };
    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        status: false
      };
    default:
      return state;
  }
};
