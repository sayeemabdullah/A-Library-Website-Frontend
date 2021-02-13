import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Login from "./components/login";
import { render } from '@testing-library/react';


// const Body = props => (
//   <p>{props.text}</p>
// )

// class Header extends Component{
//   render(){
    
//     return(
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         {this.props.title} <br></br>
//         {this.props.num} <br></br>
//         {this.props.myfunc(5,5)}
//         </p>
//         </header>
//     );
//   }
// }


class App extends Component{
  render(){
    // const add = (a,b) => a + b;
  return (
  
    <div className="App">
      {
      <Login/>
      /* <Header 
      title="Hello"
      num={5} 
      myfunc={add}
      />
      <Body text="This is the body"/> */}
    </div>
  );
}
}

export default App;
