import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to Tableau</h2>
          </div>
        </div>
        <div>
          <Auth />
        </div>
      </div>
    );
  }
}

export default App;