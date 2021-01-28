import React, { Component } from 'react';
import classes from './SearchButton.module.css'
import { connect } from 'react-redux'

class SearchButton extends Component {

    state = {
        buttonDiStatus: true,
    }

    render() {
        return (
            <div className={classes.Container}>
                <button className={classes.SearchButton} onClick={this.props.clicked} disabled={false}>
                    Search Flights
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        from: state.from,
        to: state.to,
        cabin: state.cabin,
        outBound: state.outBound,
        round: state.round,
        returnB: state.returnB,
        oneWayB: state.oneWayB,
    }
}

export default connect(mapStateToProps, null)(SearchButton);