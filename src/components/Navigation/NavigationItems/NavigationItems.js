import React, { Component } from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
class NavigationItems extends Component {
    render() {
        return (
           <ul className='NavigationItems'>
               <NavigationItem pathTo='/book'>Book</NavigationItem>
               <NavigationItem pathTo='/manageflights'>Manage</NavigationItem>
               <NavigationItem pathTo='/flykesses'>Fly Kesses</NavigationItem>
               <NavigationItem pathTo='/about'>about us</NavigationItem>
           </ul>
        );
    }
}

export default NavigationItems;