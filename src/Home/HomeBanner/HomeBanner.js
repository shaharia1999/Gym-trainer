import React from 'react';
import { Carousel } from 'react-bootstrap';
import fastImg from '../../images/Banner/fast.jpg'
import secondImg from '../../images/Banner/second.jpg'
import thirdImg from '../../images/Banner/third.jpg'
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='banner'>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={fastImg}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1> I'm Your Personal Trainer</h1>
      <p>You know exercise is good for you, but do you know how good</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={secondImg}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>I'm Your Personal Trainer</h3>
      <p>You know exercise is good for you, but do you know how good</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdImg}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>I'm Your Personal Trainer</h3>
      <p>You know exercise is good for you, but do you know how good</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HomeBanner;
