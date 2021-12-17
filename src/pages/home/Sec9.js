import { Carousel } from "react-bootstrap";
import image1 from "../../assets/7.jpeg";
import image2 from "../../assets/8.jpeg";
import image3 from "../../assets/6.jpeg";
import image4 from "../../assets/2.jpeg";
import image5 from "../../assets/5.jpeg";
import image6 from "../../assets/4.jpeg";
import image7 from "../../assets/3.jpeg";
const Sec9 = () => {
  return (
    <div className="sec9 py-3">
      <Carousel fade interval={3000} indicators={false} controls={false}>
        <Carousel.Item
          style={{ height: 100 }}
          className="d-flex justify-content-evenly"
        >
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image1}
              alt="First slide"
            />
          </div>
          <div className="h-100 ">
            <img
              className="d-block rounded w-100 h-100"
              src={image2}
              alt="First slide"
            />
          </div>
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image3}
              alt="First slide"
            />
          </div>
          <div className="h-100 ">
            <img
              className="d-block rounded w-100 h-100"
              src={image4}
              alt="First slide"
            />
          </div>
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image5}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item
          style={{ height: 100 }}
          className="d-flex justify-content-evenly"
        >
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image6}
              alt="First slide"
            />
          </div>
          <div className="h-100 ">
            <img
              className="d-block rounded w-100 h-100"
              src={image7}
              alt="First slide"
            />
          </div>
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image3}
              alt="First slide"
            />
          </div>
          <div className="h-100 ">
            <img
              className="d-block rounded w-100 h-100"
              src={image4}
              alt="First slide"
            />
          </div>
          <div className="h-100">
            <img
              className="d-block rounded w-100 h-100"
              src={image5}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sec9;
