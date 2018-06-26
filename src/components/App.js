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
        <div className="container">
          <Summary className="summary" />
        </div>
        <div className="container">
          <Counterparties className="counterparties" />
        </div>
      </div>
    );
  }
}

export default App;
