import React from 'react';
import PropTypes from 'prop-types';

class HttpMethodInput extends React.Component {
  render() {
    return <label>
      Http Method
      <select value={this.props.httpMethod} onChange={this.props.onChange}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>
    </label>
  }
}

HttpMethodInput.propTypes = {
  httpMethod: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

HttpMethodInput.defaultProps = {
  httpMethod: 'GET'
};

export default HttpMethodInput;