import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem
          data="solar-system"
        />
        <Title
          headline="Planetas"
        />
      </div>
    );
  }
}

export default App;
