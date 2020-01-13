import React, { Component } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import '../HomePage/HomePage.css'

class HomePage extends Component {
    constructor(){
        super()
        this.state ={
            longUrl:""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let url = {}
        url.longUrl = this.state.longUrl
        console.log("executing");
        axios.post("http://localhost:8000/api/url/shortening",url)
        .then(() =>console.log("axios"))
        .catch((err) => console.log(err))
        // this.props.history.push("/")
    }

    render() {
        return (
            <div>
                < Header/>
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
}


export default HomePage