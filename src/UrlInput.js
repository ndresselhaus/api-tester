import React from 'react';
import PropTypes from 'prop-types';

const UrlInput = ({ url, onChange }) => {
  return <label>
    URL
    <input type="text" value={url} onChange={onChange} />
  </label>
};

UrlInput.propTypes = {
  url: PropTypes.string
};

export default UrlInput;