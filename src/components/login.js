import React  from "react";
import logo from "../images/book.png"


export default class Login extends React.Component{
    render(){
        return(
            <div>
                <div></div>
                <img src={logo} style={{height:250}} ></img>
                <h1>A Library Website</h1>
                <h2>Login Page</h2>
                <input type="email" placeholder="email"/>
                <br></br>
                <input type="password" placeholder="password"/>
                <br></br>
                <button>Login</button>
            </div>
        );

    }
}
