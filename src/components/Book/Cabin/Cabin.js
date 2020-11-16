import React, { Component } from 'react';
import classes from './Cabin.module.css'
class Cabin extends Component {
    render() {
        const cabin = ['Economy', 'Business']
        return (
            <div className={classes.Cabin} style={{display:this.props.showCabin?'block':'none'}}>
                <ul>
                    {cabin.map((cabin,index)=><li key={index} onClick={()=>this.props.getCabinType(cabin)}>{cabin}</li>)}
                </ul>
            </div>
        );
    }
}

export default Cabin;