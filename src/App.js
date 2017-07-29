import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {parse as qsParse} from 'qs';

import UrlInput from './UrlInput';
import RequestBodyInput from './RequestBodyInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      requestBodyInput: '',
    };
  }

  handleChange = (key, e) => {
    this.setState({[key]: e.target.value});
  };

  generateThings = () => {
    const {url, requestBodyInput: requestBody} = this.state;
    const queryParams = qsParse(url.substring(url.indexOf('?') + 1));
    const bodyParams = JSON.parse(requestBody);

    this.setState({queryParams, bodyParams});

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
          <RequestBodyInput
            requestBody={this.state.requestBody}
            onChange={(e) => this.handleChange('requestBodyInput', e)}/>
        </div>
        <div>
          <button onClick={this.generateThings}>Generate Things</button>
        </div>
        <div style={{padding: 5, border: 1}}>
          {this.state.queryParams && Object.keys(this.state.queryParams).map(parameter => {
            return <label key={parameter}>{parameter}<input type="text"/></label>
          })}
          {this.state.bodyParams && Object.keys(this.state.bodyParams).map(bodyParam => {
              return <label key={bodyParam}>{bodyParam}<input type="text"/></label>
            }
          )}
        </div>
      </div>
    );
  }
}

export default App;
