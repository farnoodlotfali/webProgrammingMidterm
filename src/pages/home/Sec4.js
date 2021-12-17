import { Button, Col, Container } from "react-bootstrap";
import image1 from "../../assets/7.jpeg";
import image2 from "../../assets/8.jpeg";
import image3 from "../../assets/6.jpeg";
import image4 from "../../assets/2.jpeg";
import image5 from "../../assets/5.jpeg";
import image6 from "../../assets/4.jpeg";
import image7 from "../../assets/3.jpeg";
import { useState } from "react";
import Sec4Img from "./Sec4Img";
import { InfoRounded } from "@mui/icons-material";
const Sec4 = () => {
  const [img, setImg] = useState(image1);
  return (
    <div className="sec4 py-5 ">
      <Container>
        <div className="d-lg-flex d-grid  justify-content-lg-between ">
          <Col md="12" lg="5" className="d-flex flex-column align-items-center">
            <div className="sec4__big__image">
              <img className="h-100 w-100" src={img} alt="" />
            </div>
            <div className="d-flex">
              <Sec4Img image={image1} setImg={setImg} />
              <Sec4Img image={image2} setImg={setImg} />
              <Sec4Img image={image3} setImg={setImg} />
              <Sec4Img image={image4} setImg={setImg} />
              <Sec4Img image={image5} setImg={setImg} />
              <Sec4Img image={image6} setImg={setImg} />
              <Sec4Img image={image7} setImg={setImg} />
            </div>{" "}
            <h4>click the small images</h4>
          </Col>
          <Col md="12" lg="5">
            <h3>SOME ENFOLD CORE FEATURES</h3>
            <hr className="w-25" />
            <p>
              Enfold is a super flexible Theme with a modern backend that makes
              it incredible easy to build unique layouts by simply{" "}
              <span className="text-danger"> dragging and dropping </span> your
              content into place.
            </p>
            <ul className="h-50 d-flex flex-column justify-content-between">
              <li>Layout Builder with dozens of easy to use elements</li>
              <li>Layout Builder with dozens of easy to use elements</li>
              <li>Layout Builder with dozens of easy to use elements</li>
              <li>Layout Builder with dozens of easy to use elements</li>
              <li>Layout Builder with dozens of easy to use elements</li>
            </ul>
            <hr className="w-25 my-4" />
            <Button className="py-2">
              <InfoRounded /> learn more...
            </Button>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Sec4;
