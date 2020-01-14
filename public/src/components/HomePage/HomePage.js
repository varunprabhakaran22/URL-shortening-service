import React, { Component } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import '../HomePage/HomePage.css'

class HomePage extends Component {
    constructor(){
        super()
        this.state ={
            longUrl:"",
            shortUrl:"",
            isLoading:false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.setState({
            isLoading:!this.state.isLoading
        })
        let url = {}
        url.longUrl = this.state.longUrl
        console.log("executing");
        axios.post("http://localhost:5000/api/url/shorten",url)
        .then((res,req) =>{
            console.log(res.data.shortUrl);
            this.setState({
                shortUrl : res.data.shortUrl,
                isLoading:!this.state.isLoading
            })
        })
        .catch((err) => console.log(err))
        // this.props.history.push("/")
    }

    render() {
        return (
            <div>
                < Header/>
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
                                    value={this.state.source} 
                                    onChange = {event => this.handleChange(event)}
                                />
                                <button type="button" className = "frmBtn"  onClick = {this.handleSubmit}> Url Shorten </button>
                            </form>
                        </div>
                    )
                }
            </div>
        )
    }
}


export default HomePage