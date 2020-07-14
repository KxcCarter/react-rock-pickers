import React, { Component } from 'react';

class RockCounter extends Component {
  render() {
    return (
      <div>
          <div>
              Rocks Picked: 0
          </div>
          <div>
            <button>Increase</button>
            <button>Decrease</button>
            <button>Reset</button>
          </div>
      </div>
    );
  }
}

export default RockCounter;
