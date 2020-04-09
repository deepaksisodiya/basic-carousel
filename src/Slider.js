import React, { useState } from 'react';

import ImgCom from './ImgCom';

import './slider.scss';

function Slider({ imageArr }) {
  const ImageCompArr = imageArr.map((src, index) => <ImgCom src={src} />)
  
  const [x, setX] = useState(0);

  const goLeft = () => (x === 0) ? setX(-100*(imageArr.length - 1)) : setX(x + 100);

  const goRight = () => ((x === -100*(imageArr.length - 1))) ? setX(0) : setX(x - 100);

  return (
    <div className="slider">
      {
        ImageCompArr.map((imageCom, index) => {
          return (
            <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
              {imageCom}
            </div>
          )
        })
      }
      <button id="left" onClick={goLeft}>Prevous</button>
      <button id="right" onClick={goRight}>Next</button>
    </div>
  )
}

export default Slider;
