import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleLoginUser } from "../actions/loginedUser";
import { withRouter } from "react-router";

class Login extends Component {
  state = {
    activeUser: ""
  };

  setUser = (activeUser) => this.setState({ activeUser });

  handleLogin = (e) => {
    e.preventDefault();
    const { activeUser } = this.state;
    const { dispatch } = this.props;
    const from =
      this.props.location !== undefined &&
      this.props.location.state !== undefined
        ? this.props.location.state.from
        : "/home";

    if (activeUser) {
      dispatch(handleLoginUser(activeUser));
      this.props.history.push(`${from}`);
    } else alert("Please select a user!");
  };

  render() {
    const { users } = this.props;
    const { activeUser } = this.state;

    return (
      <Fragment>
        <div className="form signin-form">
          <form onSubmit={this.handleLogin}>
            <img
              src={
                activeUser === ""
                  ? "http://www.masscue.org/wp-content/uploads/2017/03/male-no-image.jpg"
                  : users[activeUser].avatarURL
              }
              className="profile-pic"
              alt={users[activeUser]}
            ></img>
            <select onChange={(e) => this.setUser(e.target.value)}>
              <option value=""> Select User </option>
              {Object.keys(users).map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <br />

            <button className="button">LOGIN</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(Login));
