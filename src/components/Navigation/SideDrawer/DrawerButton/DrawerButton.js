import React, { Component } from 'react';
import './DrawerButton.css'
import bar from '../../../../assets/imgs/bars.png'

class DrawerButton extends Component {
    render() {
        return (
            <img className='DrawerButton' src={bar} alt='bar icon' onClick={this.props.clicked} style={{display:this.props.display}}/>  
        );
    }
}

export default DrawerButton;