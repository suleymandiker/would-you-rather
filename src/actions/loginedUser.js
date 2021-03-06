export const SET_LOGINED_USER = "SET_LOGINED_USER";

export function setLoginedUser(id) {
  return {
    type: SET_LOGINED_USER,
    id
  };
}
