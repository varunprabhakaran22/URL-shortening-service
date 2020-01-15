import React, { Component } from 'react'
import {withRouter , Redirect} from "react-router-dom";
import CreateUser from '../CreateUser/CreateUser'
import Login from '../Login/Login'
import axios from 'axios'
import '../LandingPage/LandingPage.css'

class LandingPage extends Component {
    constructor(){
        super()
    }

    loginPage = ()=>{
        this.props.history.push("/loginPage")
    }

    userCreation = ()=>{
        this.props.history.push("/createUser")
    }

    render(){
        return(
            <div className="container flex">
                <div className="flex1 ">
                    <div className="appName alignCenter">
                        <h1>Url Shortening <span> </span> </h1> 
                    </div>
                </div>
                <div className="flex1">
                    <div>   
                        <div className= "form_right">
                            <button type="button" className = "frmBtn"  onClick = {this.loginPage}> Sign in </button>
                            <button type="button" className = "frmBtn"  onClick = {this.userCreation}> Create new user </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  withRouter(LandingPage)