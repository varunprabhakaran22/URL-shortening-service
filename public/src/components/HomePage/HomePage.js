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

    handleSubmit = async() => {
        console.log(this.state.longUrl);
        console.log("executing");
        // const {source, destination ,stopovers} = this.state
        // const data = this.state
        // console.log(source + "" +destination +  "" + stopovers);
        // await axios.post("http://localhost:8000/api/shareride/userdetails",data)
        // .then(() =>console.log("axios"))
        // .catch((err) => console.log(err))
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