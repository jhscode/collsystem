import React from 'react';

class Counterparties extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>
            <form>
              <input className="name" type="text" placeholder="name" />
              <input
                className="threshold"
                type="value"
                placeholder="threshold"
              />
              <input className="mta" type="value" placeholder="mta" />
              <input className="rounding" type="value" placeholder="rounding" />
            </form>
          </h3>
        </div>
      </div>
    );
  }
}

export default Counterparties;
