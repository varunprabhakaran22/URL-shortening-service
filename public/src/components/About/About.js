import React, { Component } from 'react'
import Header from '../Header/Header'

export default class About extends Component {
    render() {
        console.log("about us");
        
        return (
            <div>
                <Header/>
                <h1>AboutUS</h1>
            </div>
        )
    }
}
