import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Auth from './components/Auth';
import Home from './components/Home';
import Book from './components/Book';
import Wishlist from './components/Wishlist';
import Protected from './components/Protected';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){

  return (
  
    <div className="App">
      <Router>
        <div>
        <Nav/>
        <Switch>
          <Route path="/wishlist">
            <Protected comp={Wishlist}/>
          </Route>
          <Route path="/book">
            {/* <Book /> */}
            <Protected comp={Book}/>
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
