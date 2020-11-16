import React, { Component } from 'react';
import classes from './DynamicInput.module.css'
import Location from '../Location/Location'
import Cabin from '../Cabin/Cabin'
import Guests from '../Guests/Guests'
class DynamicInput extends Component {
    render() {
        return (
            <div className={classes.From} style={{marginRight:this.props.space}}>
                <label className={classes.Labels}>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder} onClick={this.props.popUp} value={this.props.value} readOnly={this.props.readOnly}/>
                <Location show={this.props.show} getLocation={this.props.getLocation}/>
                <Cabin showCabin={this.props.showCabin} getCabinType={this.props.getCabinType}/>
                <Guests showGuests={this.props.showGuests}/>
            </div>
        );
    }
}



export default DynamicInput;