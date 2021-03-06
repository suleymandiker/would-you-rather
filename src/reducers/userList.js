import {
  GET_USER_LIST,
  SAVE_USER_ANSWER,
  ADD_USER_QUESTION
} from "../actions/userList";

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        ...action.users
      };
    case SAVE_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.id])
        }
      };
    default:
      return state;
  }
}
