import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './style.css';

class Hello extends React.Component {
  render() {
    return (
      <div className="hello">Hello {this.props.name}!123</div>
    )
  }
}

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default hot(module)(Hello);