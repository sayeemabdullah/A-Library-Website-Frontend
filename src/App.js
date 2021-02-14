import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Auth from './components/Auth';
import Home from './components/Home';


class App extends Component{
  render(){

  return (
  
    <div className="App">
      {
        <Auth></Auth>
      }
    </div>
  );
}
}

export default App;
