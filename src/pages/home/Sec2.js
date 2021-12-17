import {
  AccessTimeRounded,
  HelpOutlineRounded,
  RocketLaunchRounded,
} from "@mui/icons-material";
import { Col } from "react-bootstrap";
const Sec2 = () => {
  return (
    <div className="sec2 d-lg-flex d-grid justify-content-center py-5 ">
      <Col xs="12" lg="3" className=" mx-lg-0">
        <div className="">
          <AccessTimeRounded />{" "}
          <span className="text_bold">A REAL TIME-SAVER</span>
        </div>
        <p>
          Enfold is a powerful Theme that comes with an easy{" "}
          <span className="text-danger">drag and drop admin</span> interface.
          Set up new sites in no time!
        </p>
      </Col>
      <Col xs="12" lg="3" className="mx-lg-5 ">
        <div className="text_bold">
          <HelpOutlineRounded />{" "}
          <span className="title">FREE UPDATES & SUPPORT</span>
        </div>
        <p>
          Enfold is a powerful Theme that comes with an easy{" "}
          <span className="text-danger">drag and drop admin</span> interface.
          Set up new sites in no time!
        </p>
      </Col>
      <Col xs="12" lg="3" className="mx-lg-0">
        <div className="">
          <RocketLaunchRounded />{" "}
          <span className="text_bold">NO ROCKET SCIENCE</span>
        </div>
        <p>
          Whether you have never touched a line of code or are a
          WordPress-Ninja, this theme is built for users of{" "}
          <span className="text-danger"> all skill levels</span> …
        </p>
      </Col>
    </div>
  );
};

export default Sec2;
