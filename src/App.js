import React, { Component } from 'react';
import Slider from './Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr:[
        "https://i.picsum.photos/id/237/500/500.jpg",
        "https://i.picsum.photos/id/238/500/500.jpg",
        "https://i.picsum.photos/id/239/500/500.jpg",
        "https://i.picsum.photos/id/240/500/500.jpg",
        "https://i.picsum.photos/id/241/500/500.jpg"
      ]
    }
  }
  render() {
    return (
      <Slider imageArr={this.state.imageArr} />
    )
  }
  
}

export default App;
