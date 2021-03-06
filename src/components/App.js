import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import { connect } from "react-redux";
import { getUsers } from "../actions/shared";
import Home from "./Home";
import QuestionDetail from "./QuestionDetail";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import PageError from "./PageError";

class App extends Component {
  componentDidMount() {
    const USER_ID = null;
    this.props.dispatch(getUsers(USER_ID));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            {this.props.authedUser === null ? (
              <Route path="/" exact component={Login} />
            ) : (
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route
                  path="/questions/:question_id"
                  component={QuestionDetail}
                />
                <Route path="/add" exact component={AddQuestion} />
                <Route path="/leaderboard" exact component={Leaderboard} />
              </Fragment>
            )}
            <Route component={PageError} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
