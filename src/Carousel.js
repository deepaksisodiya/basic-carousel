import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    }
  }
  render() {
    return (
      <div class="carousel">
        {this.props.imageArr.map((imageUrl, index) => {
          return (
            <img class="image" src={imageUrl} alt="Smiley face" key={index} />
          )
        })}
      </div>
    )
  }
}

Carousel.propTypes = {
  imageArr: PropTypes.array,
}
