import React, { Component } from 'react';
import './Radio.css'
class Radio extends Component {
    render() {
        return (
            <label className="container">{this.props.children}
                <input type="radio" checked={this.props.checked} onClick={this.props.clicked} readOnly/>
                <span className="checkmark"></span>
            </label>     
        );
    }
}

export default Radio;