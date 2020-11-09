import React, { Component } from 'react';
import classes from './Book.module.css'
import ToLogo from './ToLogo/ToLogo'
import DynamicInput from './Inputs/DynamicInput'
class Book extends Component {
    render() {
        return (
            <div className={classes.Book}>
                <div className={classes.Row}>
                    <DynamicInput label='Flying From' placeholder='From' space={0}/>
                    <ToLogo/>
                    <DynamicInput label='Flying To' placeholder='To' />
                    <DynamicInput label='Outband' placeholder='Outband' type='date'/>
                    <DynamicInput label='Return' placeholder='Outband' type='date'/>
                    <DynamicInput label='Cabin' placeholder='Cabin'/>
                    <DynamicInput label='Guests' placeholder='Guests' />
                </div>
            </div>
        );
    }
}

export default Book;