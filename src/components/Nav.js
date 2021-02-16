import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/book">View Books</Link></li>
                    <li><Link to="/wishlist">View Wishlist</Link></li>
                    <li id="right"><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;