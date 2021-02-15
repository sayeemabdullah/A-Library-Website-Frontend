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
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/book">View Books</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;