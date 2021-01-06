import React, { Component } from 'react';
import classes from './Flights.module.css'
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem'
import SearchFlight from '../Flights/SearchFlight/SearchFlight'

class Flights extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    handleClick = (e)=>{
        e.preventDefault()
    }

    backButtonHandler(){
       window.location.reload()
    }

    render() {
        return (
            <div className={classes.Flights}>
                <nav>
                    <NavigationItem pathTo={'/book/selectflight'} >Select Flight</NavigationItem>
                    <NavigationItem pathTo='/book/selectseat' clicked={this.handleClick}>Seat Selection</NavigationItem>
                    <NavigationItem pathTo='/book/payment' clicked={this.handleClick}>Payment</NavigationItem>
                    <button onClick={this.backButtonHandler} className={classes.Back}>Back</button>
                </nav>
                <SearchFlight/>
            </div>
        );
    }
}

export default Flights;