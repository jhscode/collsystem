import React from 'react';
import Navigation from './Navigation';
import Summary from './Summary';
import Counterparties from './Counterparties';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation className="navigation" />
        </header>
        <div>
          <Summary className="summary" />
        </div>
        <Counterparties className="counterparties" />
      </div>
    );
  }
}

export default App;
