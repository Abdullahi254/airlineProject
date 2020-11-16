import React, { Component } from 'react';
import classes from './Guests.module.css';
import {connect} from 'react-redux'
import {addAdult,addChild,addInfant} from '../../../store/actionCreators'
class Guests extends Component {
    render() {
        return (
            <div className={classes.Guests} style={{display:this.props.showGuests?'block':'none'}}>
                <div className={classes.Row}>
                    <div>
                        <i className='fas fa-male'></i>
                        <label className={classes.Age}>Adults(age 12+)</label>
                    </div>
                    <div>
                        <button>-</button>
                        <label>{this.props.adult}</label>
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.Row}>
                    <div>
                        <i className='fas fa-child'></i>
                        <label className={classes.Age}>children(age 2-11)</label>
                    </div>
                    <div>
                        <button>-</button>
                        <label>{this.props.children}</label>
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.Row}>
                    <div>
                        <i className='fas fa-baby'></i>
                        <label className={classes.Age}>Infants(under 2)</label>
                    </div>
                    <div>
                        <button>-</button>
                        <label>{this.props.infant}</label>
                        <button>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

const stateToProps = state=>{
    return{
        adult:state.adult,
        children:state.children,
        infant:state.infant
    }
}
const actionToProps = dispatch=>{
    return{
        addAdult:dispatch(addAdult()),
        addChild:dispatch(addChild()),
        addInfant:dispatch(addInfant())
    }
}
export default connect(stateToProps,actionToProps)(Guests);