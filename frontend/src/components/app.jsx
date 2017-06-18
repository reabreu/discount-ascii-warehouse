import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        React simple starter
      </div>
    );
  }
}
