import React, { Component } from 'react';
import classes from './Book.module.css'
// import ToLogo from './ToLogo/ToLogo'
import DynamicInput from './Inputs/DynamicInput'
import {connect} from 'react-redux'
import {getFrom, getTo, getCabin,getOutBound,getRound} from '../../store/actionCreators'
import Radio from './RadioButtons/Radio'
import SearchButton from './SearchButton/SearchButton'
class Book extends Component {
    state = {
        showFrom:false,
        showTo:false,
        showCabin:false,
        showGuests:false,
        round:true,
        oneWay:false
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
    radioButtonHandler = ()=>{
        this.setState({
            round:!this.state.round,
            oneWay:!this.state.oneWay
        })
    }
    changeOutboundHandler = (event)=>{
        this.props.getOutBound(event.target.value.toString())
        console.log(this.props.outBound)
    }
    changeRoundHandler = (event)=>{
        this.props.getRound(event.target.value.toString())
        console.log(this.props.round)
    }
    render() {
        const d = new Date()
        const year= d.getFullYear()
        const month = d.getMonth() +1
        const day = d.getDate()
        return (
            <div className={classes.Book} onClick={this.closePopUp}>
                <div className={classes.Row}>
                    <div className={classes.Radio}>
                        <Radio checked={this.state.round} clicked={this.radioButtonHandler}>Return</Radio>
                        <Radio checked={this.state.oneWay} clicked={this.radioButtonHandler}>OneWay</Radio>
                    </div>
                    <DynamicInput label='Flying From' placeholder='From'  show={this.state.showFrom} getLocation={this.getFromLocation} value={this.props.from} popUp={this.popUpHandler} readOnly />
                    {/* <ToLogo/> */}
                    <DynamicInput label='Flying To' placeholder='To' show={this.state.showTo} getLocation={this.getToLocation} value={this.props.to} popUp={this.popUpHandler2} readOnly/>
                    <DynamicInput label='Outband' placeholder='Outband' type='date' min={year+'-'+month+'-'+day} change={this.changeOutboundHandler}/>
                    <DynamicInput label='Return' placeholder='Outband' type='date' hide={!this.state.round} min={year+'-'+month+'-'+(day+1)} change={this.changeRoundHandler}/>
                    <DynamicInput label='Cabin' placeholder='Cabin' showCabin={this.state.showCabin} getCabinType={this.getCabinType} popUp={this.cabinPopUpHandler} value={this.props.cabin} readOnly/>
                    <DynamicInput label='Guests' placeholder='Guests' showGuests={this.state.showGuests} readOnly value={'Adult '+this.props.guestState[0]+', Children '+this.props.guestState[1]+', Infants '+this.props.guestState[2]+'.'}
                    popUp={this.guestsPopUpHandler}/>
                    <SearchButton/>
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
        getOutBound:(date)=>dispatch(getOutBound(date)),
        getRound:(date)=>dispatch(getRound(date))
    }
}
const mapStateToProps = (state)=>{
    return{
        from:state.from,
        to:state.to,
        cabin:state.cabin,
        guestState:[state.adult,state.children,state.infant],
        outBound:state.outBound,
        round:state.round
    }
}
export default connect(mapStateToProps,mapsActionToProps)(Book);