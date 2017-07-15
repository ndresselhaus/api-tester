import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UrlInput from './UrlInput';

class App extends Component {
  constructor() {
    super();
    this.state = { url: '' };
  }

  handleUrlChange = (e) => {
    this.setState({ url: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <UrlInput url={this.state.url} onChange={this.handleUrlChange} />
        </p>
      </div>
    );
  }
}

export default App;
