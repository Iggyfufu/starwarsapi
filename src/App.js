import React, { Component } from 'react';

import SearchContainer from './Components/SearchContainer';
import Footer from './Components/Footer';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image" />
        <SearchContainer />        
        <Footer />
      </div>
    );
  }
}

export default App;
