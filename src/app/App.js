import React, { Component } from 'react';
import SoundForm from './SoundForm/SoundForm.js';
import SoundsList from './SoundsList/SoundsList.js';
import 'whatwg-fetch';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sounds: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(text, voice) {
    const sound = {
      voice: voice,
      text: text
    };

    this.setState(prevState => {
      return {
        sounds: [sound].concat(prevState.sounds)
      };
    });
  }

  handleClear(sound) {
    const sounds = this.state.sounds.filter(s => s !== sound);

    this.setState({ sounds });
  }

  render() {
    return (
      <section id="app">
        <SoundForm onSubmit={this.handleSubmit} />
        <SoundsList sounds={this.state.sounds} onClear={this.handleClear} />
      </section>
    );
  }
}

export default App;
