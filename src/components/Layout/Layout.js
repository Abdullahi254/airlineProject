import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import React, { Component } from 'react';

class Layout extends Component {
  componentDidMount(){
    this.props.history.push('/book')
  }
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = ()=>{
    this.setState({
      showSideDrawer:false
    })
  }
  sideDrawerOpenHandler = ()=>{
    this.setState({
      showSideDrawer: true
    })
  }
  render() {
    return (
      <div>
        <SideDrawer closed = {this.sideDrawerClosedHandler} show={this.state.showSideDrawer}/>
        <Toolbar clicked={this.sideDrawerOpenHandler}/>
      </div>
    );
  }
}

export default Layout;