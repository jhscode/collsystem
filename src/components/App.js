import React from 'react';
import Navigation from './Navigation';
import Summary from './Summary';
import Counterparties from './Counterparties';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <div>
          <Summary />
        </div>
        <Counterparties />
      </div>
    );
  }
}

export default App;
