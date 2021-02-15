import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

function Protected(props){
    const Comp = props.comp

    var auth = JSON.parse(localStorage.getItem('auth'))
    // console.log(auth) 
    // console.warn(auth)

    if (auth){
        console.log("Auth" , auth)
        return <Comp/> 
    }
    else{
        alert("You are not authorized! Please Login")
        return <Redirect to="/" />
    }
}

export default Protected;