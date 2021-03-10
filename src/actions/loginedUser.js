export const SET_LOGINED_USER = "SET_LOGINED_USER";
export const AUTH_LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function handleLoginUser(user) {
  return {
    type: SET_LOGINED_USER,
    authenticated: true,
    loggedInUser: user
  };
}

export function receiveAuthLogout() {
  return {
    type: AUTH_LOGOUT_SUCCESS,
    authenticated: null,
    loggedInUser: null
  };
}
