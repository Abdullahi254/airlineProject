import React, { Component } from 'react';
import classes from './Book.module.css'
import ToLogo from './ToLogo/ToLogo'
import DynamicInput from './Inputs/DynamicInput'
import {connect} from 'react-redux'
import {getFrom, getTo, getCabin} from '../../store/actionCreators'
class Book extends Component {
    state = {
        showFrom:false,
        showTo:false,
        showCabin:false,
        showGuests:false
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
    closePopUp = ()=>{
        if(this.state.showFrom){
            this.setState({
                showFrom:false
            })
        }
        if(this.state.showTo){
            this.setState({
                showTo:false
            })
        }
        if(this.state.showCabin){
            this.setState({
                showCabin:false
            })
        }
        if(this.state.showGuests){
            this.setState({
                showGuests:false
            })
        }
    }
    getCabinType = (cabin)=>{
        this.props.getCabin(cabin)
        this.setState({
            showCabin:!this.state.showCabin
        })
    }
    cabinPopUpHandler = ()=>{
        this.setState({
            showCabin:true
        })
    }
    guestsPopUpHandler = ()=>{
        this.setState({
            showGuests:true
        })
    }
    render() {
        return (
            <div className={classes.Book} onClick={this.closePopUp}>
                <div className={classes.Row}>
                    <DynamicInput label='Flying From' placeholder='From'  show={this.state.showFrom} getLocation={this.getFromLocation} value={this.props.from} popUp={this.popUpHandler} readOnly />
                    {/* <ToLogo/> */}
                    <DynamicInput label='Flying To' placeholder='To' show={this.state.showTo} getLocation={this.getToLocation} value={this.props.to} popUp={this.popUpHandler2} readOnly/>
                    <DynamicInput label='Outband' placeholder='Outband' type='date'/>
                    <DynamicInput label='Return' placeholder='Outband' type='date'/>
                    <DynamicInput label='Cabin' placeholder='Cabin' showCabin={this.state.showCabin} getCabinType={this.getCabinType} popUp={this.cabinPopUpHandler} value={this.props.cabin} readOnly/>
                    <DynamicInput label='Guests' placeholder='Guests' showGuests={this.state.showGuests} readOnly value={'Adult '+this.props.guestState[0]+', Children '+this.props.guestState[1]+', Infants '+this.props.guestState[2]+'.'}
                    popUp={this.guestsPopUpHandler}/>
                </div>
            </div>
        );
    }
}
const mapsActionToProps = (dispatch)=>{
    return{
        getFrom:(location)=>dispatch(getFrom(location)),
        getTo:(location)=>dispatch(getTo(location)),
        getCabin:(cabin)=>dispatch(getCabin(cabin)),
    }
}
const mapStateToProps = (state)=>{
    return{
        from:state.from,
        to:state.to,
        cabin:state.cabin,
        guestState:[state.adult,state.children,state.infant]
    }
}
export default connect(mapStateToProps,mapsActionToProps)(Book);