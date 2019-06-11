import React, { Component } from 'react'
import Background from '../img/Home_background.jpg'

export default class index extends Component {
    render() {
        return (
            <div style={{ height: '90VH', backgroundImage: `url(${Background})`, backgroundPosition: 'center' }}>
                <span style={{ color: 'red' }}>I'm Homepage.</span>
            </div>
        )
    }
}
