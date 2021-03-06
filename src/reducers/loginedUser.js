import { SET_LOGINED_USER } from "../actions/loginedUser";

export default function loginedUser(state = null, action) {
  switch (action.type) {
    case SET_LOGINED_USER:
      return action.id;
    default:
      return state;
  }
}
