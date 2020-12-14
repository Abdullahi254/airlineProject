import React, { Component } from 'react';
import './NavigationItem.css'
import {NavLink} from 'react-router-dom'
class NavigationItem extends Component {
    render() {
        return (
            <li className='NavigationItem' onClick={this.props.clicked}>
                <NavLink to={this.props.pathTo} onClick={this.props.clicked}>{this.props.children}</NavLink>
            </li>
        );
    }
}

export default NavigationItem;