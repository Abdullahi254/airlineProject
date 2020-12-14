import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Book from './components/Book/Book'
import {Route} from 'react-router-dom'
import SeatSelection from './components/SeatSelection/SeatSelection'
class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Layout}/>
        <Route path='/book' component={Book}/>
        <Route path='/book/selectSeat' component={SeatSelection}/>
        <Route path='/manageflights' render={()=><h1>Manage</h1>}/>
        <Route path='/flykesses' render={()=><h1>Fly kesses</h1>}/>
        <Route path='/about' render={()=><h1>about us</h1>}/>
      </div>
    );
  }
}

export default App;