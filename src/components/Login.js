import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setLoginedUser } from "../actions/loginedUser";

class Login extends Component {
  state = {
    activeUser: ""
  };

  setUser = (activeUser) => this.setState({ activeUser });

  handleLogin = (e) => {
    e.preventDefault();
    const { activeUser } = this.state;
    const { setLoginedUser } = this.props;

    if (activeUser) {
      setLoginedUser(activeUser);
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

function mapDispatchToProps(dispatch) {
  return {
    setLoginedUser: (id) => {
      dispatch(setLoginedUser(id));
    }
  };
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
