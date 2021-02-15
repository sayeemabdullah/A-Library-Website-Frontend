import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

function Protected(props){
    const Comp = props.comp

    var auth = JSON.parse(localStorage.getItem('auth')) 
    console.warn(auth)

    if (auth){
        return <Comp/> 
    }
    else{
        alert("Please Login!")
        return <Redirect to="/" />
    }
}

export default Protected;