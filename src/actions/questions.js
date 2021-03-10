export const GET_QUESTIONS = "GET_QUESTIONS_TYPE";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function get_action_questions(questions) {
  return {
    type: GET_QUESTIONS,
    ...questions
  };
}

export function save_action_questionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser: authedUser.loggedInUser,
    qid,
    answer
  };
}

export function add_action_question(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}
