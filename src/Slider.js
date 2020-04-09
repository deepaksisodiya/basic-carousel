import React from 'react';

import './slider.scss';

const imageArr = [
  "https://i.picsum.photos/id/237/500/500.jpg",
  "https://i.picsum.photos/id/238/500/500.jpg",
  "https://i.picsum.photos/id/239/500/500.jpg",
  "https://i.picsum.photos/id/240/500/500.jpg",
  "https://i.picsum.photos/id/241/500/500.jpg"
]

function Slider() {
 return (
    <div className="slider">
      {
        imageArr.map((url, index) => {
          return (
            <div key={index} className="slide">
              {url}
            </div>
          )
        })
      }
      <button id="left">Left</button>
      <button id="right">Right</button>
    </div>
  )
}

export default Slider;
