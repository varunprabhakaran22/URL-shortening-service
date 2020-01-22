import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import axios from 'axios'
import '../Login/Login.css'

class Login extends Component {
    constructor(){
        super()
        this.state ={
            isValid:true,
            email:"",
            password:"",
            isLoading:false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    setLoading = ()=>{
        this.setState({
            isLoading:!this.state.isLoading
        })
    }

    handleSubmit = () => {
        this.setLoading();
        let userDetails = {}
        userDetails.email = this.state.email
        userDetails.password = this.state.password
        // axios.post("http://localhost:5000/api/auth/login",userDetails)
        axios.post("https://url-shorten-aps.herokuapp.com/api/auth/login",userDetails)
        .then((res,req) =>{
            if(res.status === 200){    
                this.setLoading();
                let token = res.data.token
                sessionStorage.setItem("token", token);
                this.props.history.push("/homepage")
            }
        })
        .catch((err) => {
            this.setLoading();
            console.log(err)
            this.setState({
                isValid:false
            }) 
        })  
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
                                <h1> Sign In </h1>
                                <div className= "input_container">
                                    <input type="text" 
                                        className= {this.state.isValid ? "frmField" : "frmFieldError"} 
                                        placeholder="Email" 
                                        name = "email"  
                                        autoComplete = "off"
                                        value={this.state.email} 
                                        onChange = {event => this.handleChange(event)}
                                    />
                                </div>

                                <div className="input_container">
                                    <input type="password"
                                        className={this.state.isValid ? "frmField" : "frmFieldError"} 
                                        placeholder="Password"     
                                        autoComplete = "off"
                                        name = "password"  
                                        value={this.state.password} 
                                        onChange = {event => this.handleChange(event)}
                                    />
                                </div>
                                <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> Login </button>

                                <div>
                                    {this.state.isLoading ? 
                                        (<h3 className ="emailExits"> ...Loading </h3>)
                                        :
                                        (null)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Login)