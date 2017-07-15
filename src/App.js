import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import UrlInput from './UrlInput';
import RequestBodyInput from './RequestBodyInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      requestBodyInput: ''
    };
  }

  handleChange = (key, e) => {
    console.log(key, e.target.value);
    this.setState({[key]: e.target.value});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <UrlInput url={this.state.url} onChange={(e) => this.handleChange('url', e)}/>
        </p>
        <div>
          <RequestBodyInput requestBody={this.state.requestBody} onChange={(e) => this.handleChange('requestBodyInput', e)}/>
        </div>
      </div>
    );
  }
}

export default App;
