import React, { Component } from 'react';
import './BackDrop.css'
class BackDrop extends Component {
    render() {
        return (
            this.props.show?
            <div className='BackDrop' onClick={this.props.clicked}>
            </div>:
            null           
        );
    }
}

export default BackDrop;