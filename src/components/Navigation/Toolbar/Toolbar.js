import React, { Component } from 'react';
import './Toolbar.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerButton from '../SideDrawer/DrawerButton/DrawerButton'
class Toolbar extends Component {
    render() {
        return (
        <header className='Toolbar'>
            <DrawerButton clicked={this.props.clicked}/>
            <Logo height={'100px'}/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
        );
    }
}

export default Toolbar;