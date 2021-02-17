import React, { Component } from "react";
import logo from "../images/book.png";

var auth = JSON.parse(localStorage.getItem("auth"));

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  delete_wishlist(value) {
    var str = "http://127.0.0.1:5000/api/wishlist/";
    var link = str + value;
    console.warn("state", this.state);
    fetch(link, {
      method: "DELETE",
      headers: {
        // "Accept":"application/json",
        "x-access-token": auth,
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

  componentDidMount() {
    console.log("auth", auth);
    fetch("http://127.0.0.1:5000/api/wishlist", {
      method: "GET",
      headers: {
        "x-access-token": auth,
      },
    }).then((result) => {
      result.json().then((data) => {
        console.log("data", data);
        this.setState({ items: data.wishlists });
      });
    });
  }

  render() {
    return (
      <div>
        <img src={logo} style={{ height: 150 }}></img>
        <h1>Wishlist</h1>
        {this.state.items
          ? this.state.items.map((item) => (
              <span>
                <table>
                  <tr>
                    {/* <td>{item.book_public_id}</td> */}
                    <td>
                      <b>Name : </b>
                      {item.name}
                    </td>
                    <td>
                      <b>Author : </b>
                      {item.author}
                    </td>
                    <td>
                      <b>Publication Year : </b>
                      {item.publication_year}
                    </td>
                    <td>
                      <button
                        id="button2"
                        onClick={() =>
                          this.delete_wishlist(item.wishlist_public_id)
                        }
                      >
                        Remove from Wishlist
                      </button>
                    </td>
                  </tr>
                </table>
              </span>
            ))
          : null}
      </div>
    );
  }
}

export default Wishlist;
