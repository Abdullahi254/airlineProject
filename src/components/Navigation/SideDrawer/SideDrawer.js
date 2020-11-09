import React, { Component } from 'react';
import classes from'./SideDrawer.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../BackDrop/BackDrop'
import Aux from '../../Hoc/Auxillary/auxillary'
class SideDrawer extends Component {
   
    render() {
        let attachedClasses = this.props.show?[classes.SideDrawer, classes.Open]:
            [classes.SideDrawer, classes.Close]
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <Logo height={'90px'} width={'100px'}/>
                    <nav>
                        <NavigationItems/>
                     </nav>
                </div>
            </Aux>
            
        );
    }
}

export default SideDrawer;