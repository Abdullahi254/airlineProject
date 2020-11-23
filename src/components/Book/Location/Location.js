import React, { Component } from 'react';
import classes from './Location.module.css'

class Location extends Component {
    render() {
        const airpotList = [
            'Jomo Kenyatta International Airport (JKIA)',
            'Kisumu International Airport (KIS)',
            'Eldoret International Airport (EDL)',
            'Moi International Airport, Mombasa',
            'Wilson Airport',
            'Malindi Airstrip',
            'Nanyuki Airstrip']
        return (
            <div className={classes.Location} style={{display:this.props.show?'block':'none'}}>
                <ul>
                    {
                        airpotList.map((airpot,index)=><li key={index} onClick={()=>{this.props.getLocation(airpot)}}>
                            {airpot}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}


export default Location;