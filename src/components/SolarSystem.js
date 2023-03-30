import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title
          headline="Planetas"
        />
        {planets.map((element) => (<PlanetCard
          planetName={ element.name }
          planetImage={ element.image }
          key={ element.name }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
