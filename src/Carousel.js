import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    }
  }

  findImageURL = () => this.props.imageArr[this.state.currentImageIndex]

  onClickPrevious = () => {
    const { imageArr } = this.props;
    this.setState((previousState) => {
      if (previousState.currentImageIndex === 0) {
        return { currentImageIndex: imageArr.length - 1  };
      }
      return { currentImageIndex: previousState.currentImageIndex - 1  };
    });
  }

  onClickNext = () => {
    const { imageArr } = this.props;
    this.setState((previousState) => {
      if (previousState.currentImageIndex === imageArr.length - 1) {
        return { currentImageIndex: 0  };
      }
      return { currentImageIndex: previousState.currentImageIndex + 1  };
    });
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.findImageURL()} alt="Smiley face" />
        <button onClick={this.onClickPrevious}>Previous</button>
        <button onClick={this.onClickNext}>Next</button>
      </React.Fragment>
    )
  }
}

Carousel.propTypes = {
  imageArr: PropTypes.array,
}
