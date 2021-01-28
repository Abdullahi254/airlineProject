import React, { Component } from 'react';
import classes from './Location.module.css'
import {connect} from 'react-redux'

class Location extends Component {
    render() {
        return (
            <div className={classes.Location} style={{display:this.props.show?'block':'none'}}>
                <ul>
                    {
                        this.props.airpotList.map((airpot,index)=><li key={index} onClick={()=>{this.props.getLocation(airpot)}}>
                            {airpot}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        airpotList:state.airpotList
    }
}


export default connect(mapStateToProps,null)(Location);