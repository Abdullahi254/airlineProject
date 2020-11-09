import React, { Component } from 'react';
import classes from './DynamicInput.module.css'
class DynamicInput extends Component {
    render() {
        return (
            <div className={classes.From} style={{marginRight:this.props.space}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder} onClick={this.props.clicked} />
            </div>
        );
    }
}

export default DynamicInput;