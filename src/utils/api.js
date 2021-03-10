import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA";

export function getAPIUsers() {
  return _getUsers().then((users) => ({
    users
  }));
}

export function getAPIQuestions() {
  return _getQuestions().then((questions) => ({
    questions
  }));
}

export function saveAPIQuestion(info) {
  return _saveQuestion(info);
}

export function saveAPIAnswer(info) {
  return _saveQuestionAnswer(info);
}


