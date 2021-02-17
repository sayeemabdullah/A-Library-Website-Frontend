import React, { Component } from "react";
import logo from "../images/book.png";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isRegistration: false,
    };
  }

  login() {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.token);
        localStorage.setItem("auth", JSON.stringify(resp.token));
        window.location.reload();
        {
          <Redirect to="/book"></Redirect>;
        }
      });
    });
  }

  register() {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:5000/api/user", {
      method: "POST",
      headers: {
        // "Accept":"application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.token);
        window.location.reload();
        // localStorage.setItem("auth",JSON.stringify(resp.token))
      });
    });
  }

  render() {
    var auth = JSON.parse(localStorage.getItem("auth"));

    return (
      <div>
        {auth ? <Redirect to="/book"></Redirect> : null}
        {!this.state.isRegistration ? (
          <div>
            <img src={logo} style={{ height: 300 }}></img>
            <div>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                required
              ></input>{" "}
              <br></br>
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                required
              ></input>{" "}
              <br></br>
              <button onClick={() => this.login()}>Login</button> <br></br>
              <button onClick={() => this.setState({ isRegistration: true })}>
                Don't have an account? Go to Registration
              </button>
            </div>
          </div>
        ) : (
          <div>
            <img src={logo} style={{ height: 300 }}></img>
            <div>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                required
              ></input>{" "}
              <br></br>
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                required
              ></input>{" "}
              <br></br>
              <button onClick={() => this.register()}>Register</button>{" "}
              <br></br>
              <button onClick={() => this.setState({ isRegistration: false })}>
                Already have an account? Go to login
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
