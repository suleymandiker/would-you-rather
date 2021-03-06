import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLoginedUser } from "../actions/loginedUser";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleLogout = () => {
    const { setLoginedUser, history } = this.props;
    setLoginedUser(null);
    history.push("/");
  };

  render() {
    const { authedUser, avatar } = this.props;
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
              Hello, {authedUser}
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
  const avatar = users[authedUser].avatarURL;

  return {
    authedUser,
    avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoginedUser: (id) => {
      dispatch(setLoginedUser(id));
    }
  };
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Header));
