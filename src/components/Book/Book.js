import React, { Component } from 'react';
import classes from './Book.module.css'
import ToLogo from './ToLogo/ToLogo'
import DynamicInput from './Inputs/DynamicInput'
import {connect} from 'react-redux'
import {getFrom, getTo} from '../../store/actionCreators'
class Book extends Component {
    state = {
        showFrom:false,
        showTo:false
    }
    getFromLocation = (location)=>{
        this.props.getFrom(location)
        this.setState({
            showFrom:!this.state.showFrom
        })
    }
    getToLocation = (location)=>{
        this.props.getTo(location)
        this.setState({
            showTo:!this.state.showTo
        })
    }
    popUpHandler = ()=>{
        this.setState({
            showFrom:!this.state.showFrom
        })
    }
    popUpHandler2 = ()=>{
        this.setState({
            showTo:!this.state.showTo
        })
    }
    render() {
        return (
            <div className={classes.Book}>
                <div className={classes.Row}>
                    <DynamicInput label='Flying From' placeholder='From' space={0} show={this.state.showFrom} getLocation={this.getFromLocation} value={this.props.from} popUp={this.popUpHandler}/>
                    <ToLogo/>
                    <DynamicInput label='Flying To' placeholder='To' show={this.state.showTo} getLocation={this.getToLocation} value={this.props.to} popUp={this.popUpHandler2}/>
                    <DynamicInput label='Outband' placeholder='Outband' type='date'/>
                    <DynamicInput label='Return' placeholder='Outband' type='date'/>
                    <DynamicInput label='Cabin' placeholder='Cabin'/>
                    <DynamicInput label='Guests' placeholder='Guests' />
                </div>
            </div>
        );
    }
}
const mapsActionToProps = (dispatch)=>{
    return{
        getFrom:(location)=>dispatch(getFrom(location)),
        getTo:(location)=>dispatch(getTo(location))
    }
}
const mapStateToProps = (state)=>{
    return{
        from:state.from,
        to:state.to
    }
}
export default connect(mapStateToProps,mapsActionToProps)(Book);