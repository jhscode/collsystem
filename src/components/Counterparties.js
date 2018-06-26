import React from 'react';
import Collateral from './Collateral';

// input form for each counterparty's collateral eligibility
class Counterparties extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>
            <form>
              <input className="name" type="text" placeholder="name" />
            </form>
            <Collateral />
          </h3>
        </div>
      </div>
    );
  }
}

export default Counterparties;
