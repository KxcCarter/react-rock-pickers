import React, { Component } from 'react';

class RockCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocks: 0,
    };
  }

  increase = () => {
    this.setState({
      rocks: this.state.rocks + 1,
    });
  };

  decrease = () => {
    this.setState({
      rocks: this.state.rocks - 1,
    });
  };

  reset = () => {
    this.setState({
      rocks: 0,
    });
  };

  render() {
    return (
      <div>
        <div>Rocks Picked: {this.state.rocks}</div>
        <div>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;
