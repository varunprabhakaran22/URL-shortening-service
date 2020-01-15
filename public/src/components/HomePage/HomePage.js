import React, { Component } from 'react'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import axios from 'axios'
import '../HomePage/HomePage.css'

class HomePage extends Component {
    constructor(){
        super()
        this.state ={
            longUrl:"",
            shortUrl:"",
            isLoading:false,
            isLogin:true
        }
    }

    //method to change the states
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    //method to send the long url to server
    handleSubmit = () => {
        this.setState({
            isLoading:!this.state.isLoading
        })
        let url = {}
        url.longUrl = this.state.longUrl
        url.token = sessionStorage.getItem("token");
        axios.post("http://localhost:5000/api/url/shorten",url)
        .then((res,req) =>{
            this.setState({
                shortUrl : res.data.shortUrl,
                isLoading:!this.state.isLoading
            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                isLogin:false,
                isLoading:!this.state.isLoading
            })
        })
    }

    render() {
        return (
            <div>
                { this.state.isLogin?
                    (
                        < Header/>
                    )
                    :
                    (
                        <LandingPage />
                    )
                }

                { this.state.isLoading ?
                    (
                        <h1 className = "loading">....Loading </h1>
                    )
                    :
                    (
                        <div>
                            <form>
                                <input type="text" 
                                    className="frmField" 
                                    placeholder="Long Url" 
                                    name = "longUrl"  
                                    autoComplete = "off"
                                    value={this.state.longUrl} 
                                    onChange = {event => this.handleChange(event)}
                                />
                                <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> Url Shorten </button>
                            </form>
                        </div>
                    )
                }

                { this.state.shortUrl.length > 0 ?
                    (
                        <div>
                            <label className="shorturl"> Short Url </label>
                            <input type="text" 
                                className="frmField" 
                                name = "shortUrl"  
                                value = {this.state.shortUrl}
                                readOnly={this.state.shortUrl}
                            />
                        </div>
                    )
                    :
                    (null)
                }
            </div>
        )
    }
}


export default HomePage