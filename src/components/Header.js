import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { receiveAuthLogout } from "../actions/loginedUser";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(receiveAuthLogout());
    this.props.history.push({
      pathname: "/login",
      state: { from: "/home" }
    });
  };

  render() {
    const { activeUser, avatar } = this.props;
    return (
      <div className="title-bar">
        <nav>
          <ul className="nav">
            <li className="nav-li">
              <NavLink className="nav-li" to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="nav-li"
                to="/leaderboard"
                exact
                activeClassName="active"
              >
                Leaderboard
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="nav-li"
                to="/add"
                exact
                activeClassName="active"
              >
                New Question
              </NavLink>
            </li>
          </ul>
        </nav>
        <Fragment>
          <ul className="nav nav-account">
            <li className="user-name nav-li">
              <img
                src={avatar}
                alt={`Avatar of ${avatar}`}
                className="profile-pic scale-down"
              />
            </li>
            <li className="padding-zero user-name nav-li">
              Hello, {activeUser}
            </li>

            <li onClick={this.handleLogout} className="nav-li">
              Logout
            </li>
          </ul>
        </Fragment>
      </div>
    );
  }
}

function mapStatetoProps({ authedUser, users }) {
  const activeUser = authedUser.loggedInUser;
  const avatar = users[activeUser].avatarURL;

  return {
    activeUser,
    avatar
  };
}

export default withRouter(connect(mapStatetoProps)(Header));
