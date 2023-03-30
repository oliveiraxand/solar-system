import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SolarSystem extends Component {
  render() {
    const { data } = this.props;
    return (<div data-testid={ data } />);
  }
}

SolarSystem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default SolarSystem;
