import { Col, Container } from "react-bootstrap";
import image1 from "../../assets/7.jpeg";
import image2 from "../../assets/8.jpeg";
import image3 from "../../assets/6.jpeg";
import ImageHover from "../../components/ImageHover";
const Sec3 = () => {
  return (
    <div className="sec3  py-5">
      <Container>
        <div className="text-center mb-4">
          <h2>SHOWCASING YOUR WORK HAS NEVER BEEN MORE FUN</h2>
        </div>
        <hr className="sec3__hr" />
        <div className="my-5">
          <p>
            The Template Builder allows you to build
            <span className="text-danger">any number</span> of cool Portfolio
            layouts, 3 of them are featured bellow. Once you have created one or
            multiple layouts you like, simply save them as template and reuse
            them as often as you need
          </p>
        </div>
        <div className="d-lg-flex d-grid justify-content-center">
          <Col md="12" lg="3">
            <ImageHover img={image1} />
          </Col>
          <Col md="12" lg="3" className="mx-lg-2 my-2 my-lg-0 ">
            <ImageHover img={image2} />
          </Col>
          <Col md="12" lg="3">
            <ImageHover img={image3} />
          </Col>
        </div>
        <div className="py-5 d-flex flex-column">
          <hr className="sec3__hr" />
          <span className="text-center mt-4">
            <a className="text-danger" href="#">
              View the Full Portfolio here
            </a>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Sec3;
