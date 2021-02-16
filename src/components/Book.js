import React, { Component } from "react";

var auth = JSON.parse(localStorage.getItem("auth"));

class Book extends Component {
  constructor() {
    super();
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    console.log("auth", auth);
    fetch("http://127.0.0.1:5000/api/book", {
      method: "GET",
      headers: {
        "x-access-token": auth,
      },
    }).then((result) => {
      result.json().then((data) => {
        console.log("data", data);
        this.setState({ items: data.books });
        // arr = this.state.items.books
        // console.log(arr)
        // arr2 = arr.toString()
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
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
                      <button>Add to wishlist</button>
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

export default Book;
