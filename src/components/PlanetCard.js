import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altPlanet = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planetName">{ planetName }</p>
        <img src={ planetImage } alt={ altPlanet } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
