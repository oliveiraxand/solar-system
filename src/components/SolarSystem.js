import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div data-testid={ data }>
        <Title
          headline="Planetas"
        />
      </div>
    );
  }
}

SolarSystem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default SolarSystem;
