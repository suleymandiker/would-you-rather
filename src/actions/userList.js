export const GET_USER_LIST = "GET_USER_LIST";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function get_action_users(users) {
  return {
    type: GET_USER_LIST,
    ...users
  };
}

export function save_action_userAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function add_action_userQuestion(authedUser, id) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    id
  };
}
