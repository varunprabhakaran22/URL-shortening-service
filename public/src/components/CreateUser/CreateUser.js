import React, { Component } from 'react'
import {withRouter , Redirect} from "react-router-dom";
import axios from 'axios'
import '../CreateUser/CreateUser.css'

class CreateUser extends Component {
    constructor(){
        super()
        this.state ={
            isMailExist:false,
            email:"",
            password:"",
        }
    }

    // changing the state
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    // axois call to send the user details to the server
    createUser = ()=>{
        let userDetails = {}
        userDetails.email = this.state.email
        userDetails.password = this.state.password
        axios.post("http://localhost:5000/api/auth/createuser",userDetails)
        .then((res,req) =>{
            if(res.status ==201){
                this.props.history.push("/loginPage")
            }
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                isMailExist:!this.state.isMailExist
            })
        })
    }

    render(){
        return(
            <div>
                <div className="container flex">
                    <div className="flex1 ">
                        <div className="appName alignCenter">
                            <h1>Url Shortening <span> </span> </h1> 
                        </div>
                    </div>

                    <div className="flex1">
                        <div>   
                            <div className= "form_right">
                                <h1> Create User</h1>
                                <div className="input_container">
                                    <input type="text" 
                                        className={this.state.isMailExist ? "frmFieldError" : "frmField"} 
                                        placeholder="Email" 
                                        autoComplete = "off"
                                        name = "email"  
                                        value={this.state.email} 
                                        onChange = {event => this.handleChange(event)}
                                    />
                                </div>

                                <div className="input_container">
                                    <input type="password" 
                                        className="frmField" 
                                        placeholder="Password" 
                                        autoComplete = "off"
                                        name = "password"  
                                        value={this.state.password} 
                                        onChange = {event => this.handleChange(event)}
                                    />
                                </div>
                                <button type="button" className = "frmBtn"  onClick = {this.createUser}> Create User </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  withRouter(CreateUser)