import React, { Component } from "react";
import logo from "../images/book.png";
import { Redirect } from "react-router-dom";

var auth = JSON.parse(localStorage.getItem("auth"));
var get = window.location.href;
var parts = get.split("/");
var book_id = parts[parts.length - 1];

class Edit_Book extends Component {
  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    console.log("auth", auth);
    var str = "http://127.0.0.1:5000/api/book/";
    var link = str + book_id;
    fetch(link, {
      method: "GET",
      headers: {
        "x-access-token": auth,
      },
    }).then((result) => {
      result.json().then((data) => {
        console.log("data", data);
        this.setState({ items: data.books });
      });
    });
  }

  editbook() {
    console.warn("state", this.state);
    var str = "http://127.0.0.1:5000/api/book/";
    var link = str + book_id;
    fetch(link, {
      method: "PUT",
      headers: {
        // "Accept":"application/json",
        "x-access-token": auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp.token);
        // localStorage.setItem("auth",JSON.stringify(resp.token))
        window.location.reload();
        {
          <Redirect to="/book"></Redirect>;
        }
      });
    });
  }

  render() {
    return (
      <div>
        <img src={logo} style={{ height: 150 }}></img>
        <h1>Edit Book</h1>
        <h2>(Only for Admin)</h2>
        {this.state.items
          ? this.state.items.map((item) => (
              <div>
                <label>
                  <b>Name: </b>
                </label>{" "}
                <input
                  defaultValue={item.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                ></input>{" "}
                <br></br>
                <label>
                  <b>Author: </b>
                </label>{" "}
                <input
                  defaultValue={item.author}
                  onChange={(e) => {
                    this.setState({ author: e.target.value });
                  }}
                ></input>{" "}
                <br></br>
                <label>
                  <b>Publication Year: </b>
                </label>{" "}
                <input
                  defaultValue={item.publication_year}
                  onChange={(e) => {
                    this.setState({ publication_year: e.target.value });
                  }}
                ></input>{" "}
                <br></br>
                <button id="button5" onClick={() => this.editbook()}>
                  Edit Book
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Edit_Book;
