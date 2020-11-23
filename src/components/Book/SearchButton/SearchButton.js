import React, { Component } from 'react';
import classes from './SearchButton.module.css'
class SearchButton extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <button className={classes.SearchButton}>
                Search Flights
                </button>
            </div>
        );
    }
}

export default SearchButton;