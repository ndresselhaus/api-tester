import React from 'react';
import PropTypes from 'prop-types';

class UrlInput extends React.Component {
  handleChange = (e) => {
    this.setState({ url: e.target.value});
    this.props.onChange(e)
  }

  render() {
    const { url } = this.props;
    return <label>
      URL
      <input type="text" value={url} onChange={this.handleChange} />
    </label>
  }
}

UrlInput.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UrlInput;