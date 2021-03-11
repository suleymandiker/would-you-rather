import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../components/Login";
import { connect } from "react-redux";
import { getUsers } from "../actions/shared";
import Home from "./Home";
import QuestionDetail from "./QuestionDetail";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import PageError from "./PageError";
import PrivateRoute from "./PrivateRoute";
import { getQuestions } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const USER_ID = null;
    this.props.dispatch(getUsers(USER_ID));
    this.props.dispatch(getQuestions());
  }

  render() {
    // const { loggedInUser } = this.props;

    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <Redirect exact from="/" to="/home" />
            <PrivateRoute path="/add" component={AddQuestion} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <PrivateRoute path="/questions/:id" component={QuestionDetail} />
            <PrivateRoute path="*" component={PageError} />
            <Route component={PageError} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  return {
    loggedInUser: authedUser.loggedInUser,
    authenticated: authedUser.authenticated,
    questions
  };
}

export default connect(mapStateToProps)(App);
