import React from 'react';

import Slider from './Slider';

function App() {
  const imageArr = [
    "https://i.picsum.photos/id/237/800/800.jpg",
    "https://i.picsum.photos/id/238/800/800.jpg",
    "https://i.picsum.photos/id/239/800/800.jpg",
    "https://i.picsum.photos/id/240/800/800.jpg",
    "https://i.picsum.photos/id/241/800/800.jpg",
  ]
  return (
    <Slider imageArr={imageArr} />
  )
}

export default App;
