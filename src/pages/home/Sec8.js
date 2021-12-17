import {
  CloudQueueRounded,
  ListAltRounded,
  QuestionMarkRounded,
} from "@mui/icons-material";
import { Col } from "react-bootstrap";
import image1 from "../../assets/room.jpeg";

const Sec8 = () => {
  return (
    <div className="sec8">
      <div
        className="d-geid py-4"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: " center",
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
        }}
      >
        <div className="text-center text-white ">
          <h2 className="">IN CASE YOU NEED HELP</h2>
          <span className="">Here are several ways to contact us</span>
        </div>
        <div className="d-lg-flex d-grid justify-content-center align-items-center pt-lg-5 pt-0">
          <Col
            md="12"
            lg="2"
            className="bg-white p-4 rounded position-relative mt-lg-0 mt-5 mx-4 mx-lg-0"
          >
            <h5>PRESALES QUESTION?</h5>
            <div className="text-center text-muted">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </div>
            <span className="text-center w-100 d-flex">
              <a href="#" className="text-danger text-center w-100">
                Learn more
              </a>
            </span>

            <div className="bg-danger circleTop">
              <QuestionMarkRounded fontSize="large" />
            </div>
          </Col>
          <Col
            md="12"
            lg="2"
            className="bg-white  p-4  rounded mx-lg-5 my-lg-0 my-5 position-relative mx-4 mx-lg-0"
          >
            <h5>PRESALES QUESTION?</h5>
            <div className="text-center text-muted">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </div>
            <span className="text-center w-100 d-flex">
              <a href="#" className="text-danger text-center w-100">
                Learn more
              </a>
            </span>
            <div className="bg-danger circleTop">
              <CloudQueueRounded fontSize="large" />
            </div>
          </Col>
          <Col
            md="12"
            lg="2"
            className="bg-white  p-4  rounded position-relative mx-4 mx-lg-0"
          >
            <h5>PRESALES QUESTION?</h5>
            <div className="text-center text-muted">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </div>
            <span className="text-center w-100 d-flex">
              <a href="#" className="text-danger text-center w-100">
                Learn more
              </a>
            </span>
            <div className="bg-danger circleTop">
              <ListAltRounded fontSize="large" />
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Sec8;
