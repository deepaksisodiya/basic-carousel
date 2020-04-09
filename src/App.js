import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';

class App extends Component () {
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
      <Carousel imageArr={this.state.imageArr} />
    )
  }
  
}

export default App;
