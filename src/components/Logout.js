import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  redirect() {
    localStorage.clear();
    return <Redirect to="/" />;
  }

  render() {
    return this.redirect();
  }
}

export default Logout;
