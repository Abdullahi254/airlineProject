import React, { Component } from 'react';
import './SeatBooking.css'
import {withRouter} from 'react-router-dom'
class SeatBooking extends Component {

    paymentHandler = ()=>{
        this.props.history.push('/book/payment')
    }
    render() {
        const letters = ['A','B','C','D','E','F']
        const numbers = [1,2,3,4,5,6,7,8,9,10]
        let body = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]}
        for(let i=0; i<numbers.length;i++){
            for(let j=0;j<letters.length; j++){
                let num = numbers[i]
                let leter = letters[j]
                let idVal = leter +num
                let status = false
                if(idVal==="A1"){
                    status=true
                }
                body[i].push(
                        <li className="seat" key={idVal} onClick={this.paymentHandler}>
                            <input type="checkbox" id={idVal} disabled={status}/>
                            <label>{letters[j]+numbers[i]}</label>
                        </li>
                )
            }
        }
       
        let rows =[]
        for(let i=0; i<10; i++){
            let rowClass = "row row--"+i+1
            rows.push(
                <li className={rowClass} key={i}>
                    <ol className="seats">
                        {body[i]}
                    </ol>
                </li>
            )
        }
        return (
            <div className="plane">
                <div className="cockpit">
                    <h1>Please select a seat</h1>
                </div>
                <div className="exit exit--front fuselage">

                </div>
                <ol className="cabin fuselage">
                    {rows}
                </ol>
                <div className="exit exit--back fuselage">

                </div>
            </div>
        );
    }
}

export default withRouter(SeatBooking);