import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { addQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class AddQuestion extends Component {
  state = {
    firstQuestion: "",
    secondQuestion: "",
    toHomePath: false
  };

  handleFirstQuestion = (e) => {
    this.setState({
      firstQuestion: e.target.value
    });
  };

  handleSecondQuestion = (e) => {
    this.setState({
      secondQuestion: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstQuestion, secondQuestion } = this.state;
    this.props.addQuestion(firstQuestion, secondQuestion);
    this.setState(() => ({
      toHomePath: true
    }));
  };

  render() {
    const { toHomePath } = this.state;

    if (toHomePath === true) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <Header />
        <div className="form margin poll-details-form">
          <div className="form-header">
            <p className="form-title">Would You Rather</p>
          </div>
          {
            <form
              onSubmit={this.handleSubmit}
              id="addPoll-form"
              className="form-body"
            >
              <div className="input-text-container">
                <textarea
                  className="block input-text"
                  name="optionOne"
                  placeholder="First Question"
                  required
                  spellCheck="false"
                  onChange={this.handleFirstQuestion}
                />

                <textarea
                  className="block input-text"
                  name="optionTwo"
                  placeholder="Second Question"
                  required
                  spellCheck="false"
                  onChange={this.handleSecondQuestion}
                />
              </div>

              <button className="button">Add</button>
            </form>
          }
        </div>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (firstQuestion, secondQuestion) => {
      dispatch(addQuestion(firstQuestion, secondQuestion));
    }
  };
}

export default connect(null, mapDispatchToProps)(AddQuestion);
