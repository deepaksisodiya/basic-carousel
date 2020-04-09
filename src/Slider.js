import React, { useState } from 'react';

import './slider.scss';

const imageArr = [
  "https://i.picsum.photos/id/237/500/500.jpg",
  "https://i.picsum.photos/id/238/500/500.jpg",
  "https://i.picsum.photos/id/239/500/500.jpg",
  "https://i.picsum.photos/id/240/500/500.jpg",
  "https://i.picsum.photos/id/241/500/500.jpg"
]

function Slider() {
  const [x, setX] = useState(0);

  const goLeft = () => (x === 0) ? setX(-100*(imageArr.length - 1)) : setX(x + 100);

  const goRight = () => ((x === -100*(imageArr.length - 1))) ? setX(0) : setX(x - 100);

  return (
    <div className="slider">
      {
        imageArr.map((url, index) => {
          return (
            <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
              {url}
            </div>
          )
        })
      }
      <button id="left" onClick={goLeft}>Left</button>
      <button id="right" onClick={goRight}>Right</button>
    </div>
  )
}

export default Slider;
