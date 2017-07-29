import React from 'react';
import PropTypes from 'prop-types';

class UrlInput extends React.Component {
  render() {
    const { url } = this.props;
    return <label>
      URL
      <input type="text" value={url} onChange={e => this.props.onChange(e)} />
    </label>
  }
}

UrlInput.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UrlInput;