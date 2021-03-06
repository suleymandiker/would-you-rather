import {
  get_action_users,
  save_action_userAnswer,
  add_action_userQuestion
} from "../actions/userList";

import {
  get_action_questions,
  save_action_questionAnswer,
  add_action_question
} from "../actions/questions";
import { setLoginedUser } from "../actions/loginedUser";

import { getAPIUsers } from "../utils/api";
import { getAPIQuestions } from "../utils/api";
import { saveAPIAnswer } from "../utils/api";

import { saveAPIQuestion } from "../utils/api";

export function getQuestions() {
  return (dispatch) => {
    return getAPIQuestions().then((questions) => {
      dispatch(get_action_questions(questions));
    });
  };
}

export function getUsers(AUTHED_ID) {
  return (dispatch) => {
    return getAPIUsers().then((users) => {
      dispatch(get_action_users(users));
      dispatch(setLoginedUser(AUTHED_ID));
    });
  };
}

export function saveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveAPIAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(save_action_questionAnswer(authedUser, qid, answer));
      dispatch(save_action_userAnswer(authedUser, qid, answer));
    });
  };
}

export function addQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser;

    return saveAPIQuestion({ optionOneText, optionTwoText, author }).then(
      (poll) => {
        dispatch(add_action_question(poll));
        dispatch(add_action_userQuestion(authedUser, poll.id));
      }
    );
  };
}