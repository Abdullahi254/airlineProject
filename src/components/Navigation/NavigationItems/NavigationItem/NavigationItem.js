import React, { Component } from 'react';
import './NavigationItem.css'
class NavigationItem extends Component {
    render() {
        return (
            <li className='NavigationItem'>
                <a href='/' className={this.props.active ? 'active':null}>{this.props.children}</a>
            </li>
        );
    }
}

export default NavigationItem;