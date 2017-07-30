import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {parse as qsParse} from 'qs';

import UrlInput from './UrlInput';
import RequestBodyInput from './RequestBodyInput';
import HttpMethodInput from './HttpMethodInput';
import ParameterList from './ParameterList';

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

    generateParameters = () => {
        // keep any existing values from previous generates
        const copyValues = (obj, existing) => Object.keys(obj)
            .forEach(key => existing && key in existing && (obj[key] = existing[key]));

        const {url, requestBodyInput: requestBody} = this.state;
        const queryParams = qsParse(url.substring(url.indexOf('?') + 1));

        copyValues(queryParams, this.state.queryParams);

        let bodyParams = this.state.bodyParams;
        try {
            bodyParams = JSON.parse(requestBody);
            copyValues(bodyParams, this.state.bodyParams);
        }
        catch (e) {
        }

        this.setState({queryParams, bodyParams});
    };

    setParameter = (collection, key, value) => {
        this.setState({[collection]: Object.assign({}, this.state[collection], {[key]: value})});
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <UrlInput url={this.state.url} onChange={(e) => this.handleChange('url', e)} />
                </p>
                <div>
                    <RequestBodyInput
                        requestBody={this.state.requestBody}
                        onChange={(e) => this.handleChange('requestBodyInput', e)} />
                </div>
                <div>
                    <button onClick={this.generateParameters}>Generate Things</button>
                </div>
                <div>
                    <HttpMethodInput httpMethod={this.state.httpMethod} onChange={e => this.handleChange('httpMethod', e)} />
                </div>
                <div style={{padding: 5, border: 1}}>
                    <ParameterList
                        title="Query Parameters"
                        params={this.state.queryParams}
                        onChange={this.setParameter.bind(null, 'queryParams')}
                    />
                    <ParameterList
                        title="Body Parameters"
                        params={this.state.bodyParams}
                        onChange={this.setParameter.bind(null, 'queryParams')}
                    />
                </div>
            </div>
        );
    }
}

export default App;
