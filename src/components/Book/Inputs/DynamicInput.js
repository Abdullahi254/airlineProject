import React, { Component } from 'react';
import classes from './DynamicInput.module.css'
import Location from '../Location/Location'


class DynamicInput extends Component {
    render() {
        return (
            <div className={classes.From} style={{marginRight:this.props.space}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder} onClick={this.props.popUp} value={this.props.value} readOnly/>
                <div>
                    <Location show={this.props.show} getLocation={this.props.getLocation}/>
                </div>
            </div>
        );
    }
}



export default DynamicInput;