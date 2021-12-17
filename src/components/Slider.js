import { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  PauseCircleOutlineRounded,
  PlayCircleOutlineRounded,
} from "@mui/icons-material";

import image1 from "../assets/7.jpeg";
import image2 from "../assets/8.jpeg";
import image3 from "../assets/6.jpeg";

import "../style/slider.css";

const Slider = () => {
  const [interval, setInterval] = useState(1000);
  const [pause, setPause] = useState(false);
  const [play, setPlay] = useState(true);
  const stopInterval = () => {
    setInterval(null);
    setPause(true);
    setPlay(false);
  };
  const startInterval = () => {
    setInterval(1000);
    setPause(false);
    setPlay(true);
  };
  return (
    <div className="slider">
      <Carousel fade interval={interval}>
        <Carousel.Item>
          <div className="h-100">
            <img
              className="d-block w-100 h-100"
              src={image1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-100">
            <img
              className="d-block w-100 h-100"
              src={image2}
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-100">
            <img
              className="d-block w-100 h-100"
              src={image3}
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="icons">
        <div
          className={`play ${play ? "play__active" : ""}`}
          onClick={() => startInterval()}
        >
          <PlayCircleOutlineRounded />
        </div>
        <div
          className={`pause ${pause ? "pause__active" : ""}`}
          onClick={() => stopInterval()}
        >
          <PauseCircleOutlineRounded />
        </div>
      </div>
    </div>
  );
};

export default Slider;
