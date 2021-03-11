import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Header from "./Header";

class Home extends Component {
  state = {
    tabStatus: "unanswered"
  };

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <Fragment>
        <Header />
        <ul className="toggler">
          <li
            onClick={() => {
              this.setState({ tabStatus: "unanswered" });
            }}
          >
            Unanswered
          </li>
          <li
            onClick={() => {
              this.setState({ tabStatus: "answered" });
            }}
          >
            Answered
          </li>
        </ul>

        {Object.keys(unansweredQuestions).length === 0 &&
        this.state.tabStatus === "unanswered" ? (
          <p>no results</p>
        ) : null}

        {Object.keys(answeredQuestions).length === 0 &&
        this.state.tabStatus === "answered" ? (
          <p>no results</p>
        ) : null}

        {this.state.tabStatus === "unanswered" &&
        Object.keys(unansweredQuestions).length !== 0 ? (
          <div className="question-form margin">
            {unansweredQuestions.map((id) => (
              <Question key={id} id={id} />
            ))}
          </div>
        ) : this.state.tabStatus === "answered" &&
          Object.keys(answeredQuestions).length !== 0 ? (
          <div className="question-form margin">
            {answeredQuestions.map((id) => (
              <Question key={id} id={id} />
            ))}
          </div>
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const activeUser = authedUser.loggedInUser;
  const user = users[activeUser];

  const answeredQuestions =
    Object.keys(questions).length !== 0
      ? Object.keys(user.answers).sort(
          (a, b) => questions[b].timestamp - questions[a].timestamp
        )
      : [];

  const unansweredQuestions =
    Object.keys(questions).length !== 0
      ? Object.keys(questions)
          .filter((pollID) => !answeredQuestions.includes(pollID))
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : [];

  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(Home);
