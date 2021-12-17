import "../../style/page/portfolio.css";
import image1 from "../../assets/7.jpeg";
import image2 from "../../assets/8.jpeg";
import image3 from "../../assets/6.jpeg";
import image4 from "../../assets/2.jpeg";
import image5 from "../../assets/5.jpeg";
import image6 from "../../assets/4.jpeg";
import image7 from "../../assets/3.jpeg";
import image8 from "../../assets/1.jpeg";
import image9 from "../../assets/room.jpeg";
import { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import ImageHover from "../../components/ImageHover";
import {
  PhoneAndroidRounded,
  SearchRounded,
  SyncRounded,
  TaskAltRounded,
} from "@mui/icons-material";

const Portfolio = () => {
  const [category, setCategory] = useState(All);
  const allCategory = { All, CSS, HTML, Photography, PSD, VIDEO };
  const handleClick = (cate) => {
    setCategory(allCategory[cate]);
  };
  return (
    <div className="portfolio">
      <div className="portfolio__title  d-lg-flex d-grid justify-content-between py-3 text-muted">
        <h5 className="text-nowrap"> farnood Shop</h5>
        <div className="text-nowrap">hi all i am farnood</div>
      </div>

      <Container className="my-5 ">
        <div className="mx-5">
          <div>
            <h4>
              Hey there! We are Enfold and we make really beautiful and amazing
              stuff. This can be used to describe what you do, how you do it, &
              who you do it for.
            </h4>
            <hr className="w-50" />
          </div>

          <div className="text-muted">
            <span
              onClick={() => handleClick("All")}
              className="portfolio__category"
            >
              All/{" "}
            </span>
            <span
              onClick={() => handleClick("CSS")}
              className="portfolio__category"
            >
              CSS/
            </span>
            <span
              onClick={() => handleClick("HTML")}
              className="portfolio__category"
            >
              HTML/
            </span>
            <span
              onClick={() => handleClick("Photography")}
              className="portfolio__category"
            >
              Photography/
            </span>
            <span
              onClick={() => handleClick("PSD")}
              className="portfolio__category"
            >
              PSD/{" "}
            </span>
            <span
              onClick={() => handleClick("VIDEO")}
              className="portfolio__category"
            >
              VIDEO
            </span>
          </div>

          <div className="d-flex flex-wrap my-3">
            {category.map((item) => {
              return (
                <Col lg="3" className="mb-2">
                  <ImageHover img={item} />
                </Col>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="portfolio__info d-flex flex-column justify-content-center py-5">
        <div className="d-lg-flex d-grid  justify-content-center">
          <Col xs="12" lg="2" className="px-2 mb-2">
            <h6>
              <TaskAltRounded /> FREE SUPPORT
            </h6>
            <div className="text-muted">
              Aenean commodo ligula eget dolor.{" "}
              <span className="text-danger">Lorem</span> ipsum dolor sit amet,
              consectetuer adipiscing elit. Cum sociis natoque Aenean massa.
            </div>
          </Col>
          <Col xs="12" lg="2" className="px-2 mb-2">
            <h6>
              <SyncRounded /> UPDATES
            </h6>
            <div className="text-muted">
              Aenean commodo ligula eget dolor.{" "}
              <span className="text-danger">Lorem</span> ipsum dolor sit amet,
              consectetuer adipiscing elit. Cum sociis natoque Aenean massa.
            </div>
          </Col>
          <Col xs="12" lg="2" className="px-2 mb-2">
            <h6>
              <PhoneAndroidRounded /> MOBILE READY
            </h6>
            <div className="text-muted">
              Aenean commodo ligula eget dolor.{" "}
              <span className="text-danger">Lorem</span> ipsum dolor sit amet,
              consectetuer adipiscing elit. Cum sociis natoque Aenean massa.
            </div>
          </Col>
          <Col xs="12" lg="2" className="px-2 mb-2">
            <h6>
              <SearchRounded /> SEO OPTIMIZED
            </h6>
            <div className="text-muted">
              Aenean commodo ligula eget dolor.{" "}
              <span className="text-danger">Lorem</span> ipsum dolor sit amet,
              consectetuer adipiscing elit. Cum sociis natoque Aenean massa.
            </div>
          </Col>
        </div>

        <div className="text-center  m-4 ">
          <Col lg="9" className="mx-auto bg-white py-4 border">
            <div className="d-lg-flex d-grid  justify-content-around">
              <div>
                Enfold is freakishly powerful and so damn easy to use, its
                probably the last theme you will ever buy
              </div>
              <div className="portfolio__info__btn mt-2">
                <Button>learn more</Button>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};
const All = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];
const CSS = [image4, image1, image3, image4];
const HTML = [image8, image2, image3, image4, image7, image8, image9];
const Photography = [image5, image3, image1, image7, image8];
const PSD = [image8, image9];
const VIDEO = [image3, image3, image5, image1, image8, image3];
export default Portfolio;
