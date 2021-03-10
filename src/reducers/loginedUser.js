import { SET_LOGINED_USER } from "../actions/loginedUser";
import { AUTH_LOGOUT_SUCCESS } from "../actions/loginedUser";

export default function loginedUser(state = {}, action) {
  switch (action.type) {
    case SET_LOGINED_USER:
      return {
        ...state,
        authenticated: action.authenticated,
        loggedInUser: action.loggedInUser
      };
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: action.authenticated,
        loggedInUser: action.loggedInUser
      };
    default:
      return state;
  }
}
