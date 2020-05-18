import React, { Component } from "react";
import { connect } from "react-redux";

import "./Header.css";
import Payment from "../Payment";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  login() {
    window.location.pathname = "/api/auth/google";
  }

  logout() {
    window.location.pathname = "/api/auth/logout";
  }

  render() {
    const {
      auth: { status, loading, profile }
    } = this.props;
    return (
      <div className="header">
        <p className="brand-name">Feedback</p>
        <nav>
          <ul>
            {status ? (
              <>
                <li className="username">
                  <p>Welcome {profile.name} </p>
                </li>
                <li>
                  <Payment />
                </li>
                <li className="username">
                  <button>Credits : {profile.credits}</button>
                </li>
                <li>
                  <button onClick={this.logout}>Logout</button>
                </li>
              </>
            ) : loading ? (
              <li>
                <p> Logging In.... </p>
              </li>
            ) : (
              <li>
                <button onClick={this.login}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  console.log("Maping State To props. State:", auth);
  return {
    auth
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     loginAction : dispatch.bind(null, login()),
//     logoutAction : dispatch.bind(null, logout())
//   }
// }

export default connect(
  mapStateToProps,
  {}
)(Header);
