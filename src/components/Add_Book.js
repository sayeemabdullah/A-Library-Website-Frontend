import React, { Component } from "react";
import logo from "../images/book.png";
import { Redirect } from "react-router-dom";

var auth = JSON.parse(localStorage.getItem("auth"));

class Add_Book extends Component {
  addbook() {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:5000/api/book", {
      method: "POST",
      headers: {
        // "Accept":"application/json",
        "x-access-token": auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.token);
        // localStorage.setItem("auth",JSON.stringify(resp.token))
      });
    });
  }

  render() {
    return (
      <div>
        <img src={logo} style={{ height: 300 }}></img>
        <div>
          <h2>Add Book</h2>
          <h3>(Only for Admin)</h3>
        </div>
        <br></br>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          ></input>{" "}
          <br></br>
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => {
              this.setState({ author: e.target.value });
            }}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Publication Year"
            onChange={(e) => {
              this.setState({ publication_year: e.target.value });
            }}
          ></input>
          <br></br>
          <button onClick={() => this.addbook()}>Add</button>
        </div>
      </div>
    );
  }
}

export default Add_Book;
