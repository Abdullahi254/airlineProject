import React, { Component } from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
class NavigationItems extends Component {
    render() {
        return (
           <ul className='NavigationItems'>
               <NavigationItem >Book</NavigationItem>
               <NavigationItem >Manage</NavigationItem>
               <NavigationItem>Fly Kesses</NavigationItem>
               <NavigationItem>about us</NavigationItem>
           </ul>
        );
    }
}

export default NavigationItems;