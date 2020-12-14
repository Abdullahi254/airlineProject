import React, { Component } from 'react';
import './SeatBooking.css'
class SeatBooking extends Component {
    render() {
        return (
            <div className="plane">
                <div className="cockpit">
                    <h1>Please select a seat</h1>
                </div>
                <div className="exit exit--front fuselage">

                </div>
                <ol className="cabin fuselage">
                    <li className="row row--1">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="1A" />
                                <label >1A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="1B" />
                                <label >1B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="1C" />
                                <label >1C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" disabled id="1D" />
                                <label >Occupied</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="1E" />
                                <label >1E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="1F" />
                                <label >1F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--2">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="2A" />
                                <label >2A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="2B" />
                                <label >2B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="2C" />
                                <label >2C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="2D" />
                                <label >2D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="2E" />
                                <label >2E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="2F" />
                                <label >2F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--3">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="3A" />
                                <label >3A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="3B" />
                                <label >3B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="3C" />
                                <label >3C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="3D" />
                                <label >3D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="3E" />
                                <label >3E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="3F" />
                                <label >3F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--4">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="4A" />
                                <label >4A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="4B" />
                                <label >4B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="4C" />
                                <label >4C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="4D" />
                                <label >4D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="4E" />
                                <label >4E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="4F" />
                                <label >4F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--5">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="5A" />
                                <label >5A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="5B" />
                                <label >5B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="5C" />
                                <label >5C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="5D" />
                                <label >5D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="5E" />
                                <label >5E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="5F" />
                                <label >5F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--6">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="6A" />
                                <label >6A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="6B" />
                                <label >6B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="6C" />
                                <label >6C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="6D" />
                                <label >6D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="6E" />
                                <label >6E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="6F" />
                                <label >6F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--7">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="7A" />
                                <label >7A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="7B" />
                                <label >7B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="7C" />
                                <label >7C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="7D" />
                                <label >7D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="7E" />
                                <label >7E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="7F" />
                                <label >7F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--8">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="8A" />
                                <label >8A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="8B" />
                                <label >8B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="8C" />
                                <label >8C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="8D" />
                                <label >8D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="8E" />
                                <label >8E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="8F" />
                                <label >8F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--9">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="9A" />
                                <label >9A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="9B" />
                                <label >9B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="9C" />
                                <label >9C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="9D" />
                                <label >9D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="9E" />
                                <label >9E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="9F" />
                                <label >9F</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--10">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" id="10A" />
                                <label>10A</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="10B" />
                                <label>10B</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="10C" />
                                <label >10C</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="10D" />
                                <label>10D</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="10E" />
                                <label>10E</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" id="10F" />
                                <label>10F</label>
                            </li>
                        </ol>
                    </li>
                </ol>
                <div className="exit exit--back fuselage">

                </div>
            </div>
        );
    }
}

export default SeatBooking;