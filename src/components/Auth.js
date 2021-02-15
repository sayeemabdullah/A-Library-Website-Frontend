import React, { Component } from 'react';
import logo from "../images/book.png";

class Auth extends Component {

    login()
    {
        console.warn("state",this.state)
        fetch('http://127.0.0.1:5000/api/login',{
            method:"POST",
            headers:{
                // "Accept":"application/json",
                "Authorization":"Basic YWRtaW46YWRtaW4=",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.token);
                localStorage.setItem("auth",JSON.stringify(resp.token))
            })
        })
    }

    // .then((result)=>{
    //     result.json().then((resp)=>{
    //         console.log(resp);
    //         localStorage.setItem("auth",JSON.stringify(resp.success.token))
    //     })
    // })


    render() {
        return (
            <div>
                <img src={logo} style={{height:250}} ></img>
                <div>
                    <input type="text" placeholder="Username"
                    onChange={(e)=>{this.setState({name:e.target.value})}}
                    ></input> <br></br>
                    <input type="text" placeholder="Password"
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                    ></input> <br></br>
                    <button onClick={()=>this.login()}>Login</button>
                </div>
            </div>
        );
    }
}

export default Auth;