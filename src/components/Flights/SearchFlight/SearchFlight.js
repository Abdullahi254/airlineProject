import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import classes from './SearchFlight.module.css'
import {withRouter} from 'react-router-dom'
class SearchFlight extends Component {
    state = {
        flights: [],
        todaysFlight: []
    }
    selectFlightHandler = ()=>{
        this.props.history.push('/book/selectseat')
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('http://localhost:4000/api/flightsinfo/' + this.props.from + '/' + this.props.to + '/' + this.props.outBound)
            .then((response) => {
                this.props.turnOffSpinner()
                if (response.data.length < 1) {
                    axios.get('http://localhost:4000/api/flightsinfo/' + this.props.from + '/' + this.props.to)
                        .then(res => {
                            let days = {
                                'sunday': 0,
                                'monday': 1,
                                'tuesday': 2,
                                'wednesday': 3,
                                'thursday': 4,
                                'friday': 5,
                                'saturday': 6
                            }


                            let flights = res.data.map((flight, index) => {
                                let outBoundDate = new Date(this.props.outBound).getDate()
                                let outBoundDay = new Date(this.props.outBound).getDay()
                                let flightDay = days[flight.day]
                                let flightDate = 0
                                if (flightDay < outBoundDay) {
                                    flightDate = ((flightDay + 7) - outBoundDay) + outBoundDate
                                }
                                else {
                                    flightDate = (flightDay - outBoundDay) + outBoundDate
                                }
                                let fullFlightDate = new Date(this.props.outBound)
                                fullFlightDate.setDate(flightDate)
                                return (
                                    <div key={index} className={classes.boxes} onClick={this.selectFlightHandler}>
                                        <p>{'Day: ' + flight.day}</p>
                                        <p>{'Date: ' + fullFlightDate.getDate() + '-' + (fullFlightDate.getMonth() + 1) + '-' + fullFlightDate.getFullYear()}</p>
                                        <p>{'Time: ' + flight.time[0] + ':' + flight.time[1] + 'hrs'}</p>
                                        <p className={classes.Price}>Starts From: KSH{flight.price}</p>
                                    </div>
                                )
                            }
                            )
                            this.setState({
                                flights: [...flights]
                            })
                        })
                }
                else {
                    let todaysFlight = response.data.map((flight, index) => <div key={index} className={classes.boxes} onClick={this.selectFlightHandler}>
                        <p>{'Day: ' + flight.day}</p>
                        <p>{'Date: ' + this.props.outBound}</p>
                        <p>{'Time: ' + flight.time[0] + ':' + flight.time[1] + 'hrs'}</p>
                        <p className={classes.Price}>Price Starting From: KSH{flight.price}</p>
                    </div>)
                    this.setState({
                        todaysFlight: [...todaysFlight]
                    })

                }
            }).catch(er => {
                this.props.turnOffSpinner()
                console.log('error' + er)
            })
    }
    selectFlightHandler = ()=>{
        this.props.history.push("/book/selectseat")
    }
    render() {
        return (
            <div>
                {this.state.todaysFlight.length > 0 ?
                    <div>
                        <p className={classes.Notice} style={{ color: 'green', height: '50px', padding: '0 12px' }}>Select Below; Flights Found on {this.props.outBound}</p>
                        <div className={classes.BoxContainer}>{this.state.todaysFlight}</div>
                    </div> :
                    <div>
                        <div className={classes.Notice}>
                            <p>Their are no Flights on {this.props.outBound} Flying to {this.props.to} from {this.props.from}</p>
                            <p style={{ color: 'green' }}>Select From the Available Flights Listed Below:</p>
                        </div>
                        <div className={classes.BoxContainer}>{this.state.flights}</div>
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        from: state.from,
        to: state.to,
        cabin: state.cabin,
        guestState: [state.adult, state.children, state.infant],
        outBound: state.outBound,
        round: state.round,
        spinner: state.spinner
    }
}

const mapsActionToProps = (dispatch) => {
    return {
        turnOffSpinner: () => dispatch({type:"TURN_OFF_SPINNER"})
    }
}

export default withRouter(connect(mapStateToProps, mapsActionToProps)(SearchFlight));