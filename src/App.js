import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Book from './components/Book/Book'
class App extends Component {
  render() {
    return (
      <div>
        <Layout/>
        <Book/>
      </div>
    );
  }
}

export default App;