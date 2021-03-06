import React, { Component } from 'react'
import { withRouter} from "react-router-dom";
import '../LandingPage/LandingPage.css'

class LandingPage extends Component {
    
    //redirecting
    loginPage = ()=>{
        this.props.history.push("/loginPage")
    }

    //redirecting
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