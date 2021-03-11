import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This poll doesn't exist</p>;
    }

    const { optionOne, optionTwo } = question;
    const { question_id } = this.props;

    return (
      <Link to={`/questions/${question_id}`} className="form margin poll-form">
        <div className="form-header">
          <p className="form-title">Would You Rather</p>
        </div>
        <div className="form-body">
          <p className="optionOne">{optionOne.text}</p>
          <div className="or-seperator">
            <hr />
            <p className="inline-p">OR</p>
            <hr />
          </div>
          <p className="optionTwo">{optionTwo.text}</p>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];
  const question_id = id;

  return {
    authedUser,
    question,
    id,
    question_id
  };
}

export default connect(mapStateToProps)(Question);
