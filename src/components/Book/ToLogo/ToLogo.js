import React, { Component } from 'react';
import logo from '../../../assets/imgs/ToLogo.png'
import './ToLogo.css'

class ToLogo extends Component {
    render() {
        return (
            <div className='ToLogo'>
                <img src={logo} alt='round-arrow-circle'/>
            </div>
        );
    }
}

export default ToLogo;