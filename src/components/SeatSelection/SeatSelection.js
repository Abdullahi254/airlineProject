import React, { Component } from 'react';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem'
import classes from './SeatSelection.module.css'
import SeatBooking from './SeatBooking/SeatBooking'

class SeatSelection extends Component {
    handleClick = (e) => {
        e.preventDefault()
    }

    backButtonHandler() {
        window.location.reload()
    }

    render() {
        return (
            <div className={classes.Flights}>
                <nav>
                    <NavigationItem pathTo={'/book/selectflight'} >Select Flight</NavigationItem>
                    <NavigationItem pathTo='/book/selectseat' clicked={this.handleClick}>Seat Selection</NavigationItem>
                    <NavigationItem pathTo='/book/payment' clicked={this.handleClick}>Payment</NavigationItem>
                    <button onClick={this.backButtonHandler}>Back</button>
                </nav>
                <SeatBooking/>
            </div>
        );
    }
}

export default SeatSelection;

