import React, { Component } from 'react';
import classes from './Guests.module.css';
import {connect} from 'react-redux'
import {addPerson,removePerson} from '../../../store/actionCreators'
class Guests extends Component {
    addPersonHandler = (person)=>{
        this.props.addPerson(person)
    }
    removePersonHandler = (person)=>{
        this.props.removePerson(person)
    }
    render() {
        const guests = ['fas fa-male fa-2x', ' fas fa-child fa-2x', 'fas fa-baby fa-2x']
        const names = ['Adults(age 12+)', 'children(age 2-11)', 'Infants(under 2)']
        const labels = ['adult', 'children', 'infant']
        return (
            <div className={classes.Guests} style={{display:this.props.showGuests?'block':'none'}}>
                {
                    guests.map((guest,index)=><div className={classes.Row} key={index}>
                        <div>
                            <i className={guest}></i>
                            <label className={classes.Age}>{names[index]}</label>
                        </div>
                        <div className={classes.Container2}>
                            <button className={classes.Negative} onClick={()=>this.removePersonHandler(labels[index])} disabled={this.props.guestState[index]<1?true:false}>-</button>
                            <label>{this.props.guestState[index]}</label>
                            <button className={classes.Positive} onClick={()=>this.addPersonHandler(labels[index])}>+</button>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

const mapsPropsToState = state=>{
    return{
        guestState:[state.adult,state.children,state.infant]
    }
}

const mapsPropsToAction = dispatch=>{
    return{
        addPerson:(person)=>dispatch(addPerson(person)),
        removePerson:(person)=>dispatch(removePerson(person))
    }
}
export default connect(mapsPropsToState,mapsPropsToAction)(Guests);