import React from 'react';
import PropTypes from 'prop-types';

const RequestBodyInput = ({ requestBody, onChange }) => {
  return <textarea className="App-request-body-input" type="text" value={requestBody} onChange={onChange} />
};

RequestBodyInput.propTypes = {
  requestBody: PropTypes.string
};

export default RequestBodyInput;