import React, { Component } from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCount: 0 };

    // Below is where the method "handleCount" is declared.
    // I don't understand the right-hand side of this declaration.
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(props) {
    if (props === '+') {
      this.setState({
        totalCount: this.state.totalCount + 1,
      });
    } else if (props === '-') {
      this.setState({
        totalCount: this.state.totalCount - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>React Rock Pickers</h1>
          <p>
            "You ain't ever worked a day until you worked a day picking rocks." - Mike Schlangen
          </p>
          <h3>Total rocks picked: {this.state.totalCount}</h3>
        </header>
        <h2>Luke</h2>
        <RockCounter GlobalCounter={this.handleCount} />
        <h2>JJ</h2>
        <RockCounter GlobalCounter={this.handleCount} />
        <h2>Sam</h2>
        <RockCounter GlobalCounter={this.handleCount} />
        <h2>Pete</h2>
        <RockCounter GlobalCounter={this.handleCount} />
      </div>
    );
  }
}

export default App;
