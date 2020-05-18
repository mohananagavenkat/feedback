import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL
} from "../config/type";
import axios from "axios";

export const fetchProfile = () => {
  console.log("[Fetch Profile Action]");
  return async function(dispatch) {
    dispatch({
      type: FETCH_PROFILE_START
    });
    let response = await axios.get("/api/profile", { withCredentials: true });
    let profile = response.data.profile;
    console.log(profile);
    if (profile && profile._id) {
      return dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: {
          ...profile
        }
      });
    } else {
      return dispatch({
        type: FETCH_PROFILE_FAIL
      });
    }
  };
};
