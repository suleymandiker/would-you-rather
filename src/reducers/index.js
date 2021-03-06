import { combineReducers } from "redux";
import authedUser from "./loginedUser";
import users from "./userList";
import questions from "./questions";

export default combineReducers({
  authedUser,
  users,
  questions
});
