import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title
          headline="Missões"
        />
        {missions.map((element) => (
          <MissionCard
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
            key={ element.name }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
