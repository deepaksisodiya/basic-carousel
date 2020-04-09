import React, { useState } from 'react';

import './slider.scss';

function ImgCom({ src }) {
  let imageStyles = {
    width: 100 + "%",
    height: 100 + "%"
  }
  return <img src={src} alt="s" style={imageStyles}></img>
}

function Slider() {
  const imageArr = [
    <ImgCom src="https://i.picsum.photos/id/237/800/800.jpg" />,
    <ImgCom src="https://i.picsum.photos/id/238/800/800.jpg" />,
    <ImgCom src="https://i.picsum.photos/id/239/800/800.jpg" />,
    <ImgCom src="https://i.picsum.photos/id/240/800/800.jpg" />,
    <ImgCom src="https://i.picsum.photos/id/241/800/800.jpg" />
  ];
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
      <button id="left" onClick={goLeft}>Prevous</button>
      <button id="right" onClick={goRight}>Next</button>
    </div>
  )
}

export default Slider;
