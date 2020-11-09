import React, { Component } from 'react';
import './Logo.css'
import klogo from '../../../assets/logos/kessesAir.png'
class Logo extends Component {
    render() {
        return (
            <div className='Logo' style={{height:this.props.height,width:this.props.width}}>
               <img src={klogo} alt='plane logo'/> 
            </div>
        );
    }
}

export default Logo;