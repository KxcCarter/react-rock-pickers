import React, { Component } from 'react';

class RockCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocks: 0,
      done: null,
    };
  }

  increase = () => {
    this.setState(
      {
        rocks: this.state.rocks + 1,
      },
      () => {
        this.checkDone();
      }
    );
  };

  checkDone = () => {
    if (this.state.rocks >= 50) {
      this.setState({
        done: 'Done!!',
      });
    }
  };

  decrease = () => {
    if (this.state.rocks !== 0) {
      this.setState({
        rocks: this.state.rocks - 1,
      });
    } else {
      alert(`You can't do that!`);
    }
  };

  reset = () => {
    this.setState({
      rocks: 0,
    });
  };

  render() {
    return (
      <div>
        <div>
          Rocks Picked: {this.state.rocks} {this.state.done}
        </div>
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
