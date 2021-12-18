import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import Inbox from './Inbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Cover /> */}
        <Inbox />
      </div>
    )
  }
}


export default App; 