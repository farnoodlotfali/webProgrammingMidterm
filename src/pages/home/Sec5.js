import {
  AssistantPhotoRounded,
  AudiotrackRounded,
  BoltRounded,
  ConstructionRounded,
  PeopleRounded,
} from "@mui/icons-material";
import { Button, Col, Container } from "react-bootstrap";

const Sec5 = () => {
  return (
    <div className="sec5 py-5">
      <Container>
        <div className="d-flex justify-content-between">
          <Col
            lg="6"
            className="d-flex flex-column align-items-end sec5__right"
          >
            <h3>ABOUT US</h3>
            <hr className="w-25" />
            <div className="text-end">
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-danger">consectetuer adipiscing</span> elit.
              Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat
              <br />
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              <br />
              <br /> vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
              a,
              <br /> venenatis vitae, justo. Nullam dictum felis eu pede mollis
              <br /> pretium. Integer{" "}
              <span className="text-danger">tincidunt</span>.
              <br /> Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus.
            </div>
            <hr className="w-25" />
            <Button className="py-2">
              <PeopleRounded /> Check out our Team
            </Button>
          </Col>
          <Col lg="6">
            <div className="d-flex">
              <div className="d-grid align-items-center">
                <div className="icon">
                  <ConstructionRounded fontSize="large" color="inherit" />
                </div>
                <div className="border__right" />
                <div className="icon">
                  <AudiotrackRounded fontSize="large" />
                </div>
                <div className="border__right" />

                <div className="icon">
                  <BoltRounded fontSize="large" />
                </div>
                <div className="border__right" />

                <div className="icon">
                  <AssistantPhotoRounded fontSize="large" />
                </div>
              </div>
              <div className="d-grid mx-2">
                <div className="sec5__text ">
                  <h4> MELODICAL BY NATURE</h4>
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt.
                </div>
                <div className="sec5__text my-2">
                  <h4> MELODICAL BY NATURE</h4>
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt.
                </div>
                <div className="sec5__text ">
                  <h4> MELODICAL BY NATURE</h4>
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt.
                </div>
                <div className="sec5__text mt-3">
                  <h4> MELODICAL BY NATURE</h4>
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt.
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Sec5;
