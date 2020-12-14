import React, { Component } from 'react';
import './Spinner.css'

class Spinner extends Component {
    render() {
        return (
            <div className="loader" style={{
                display:this.props.show?'block':'none'
            }}>
                
            </div>
        );
    }
}

export default Spinner;