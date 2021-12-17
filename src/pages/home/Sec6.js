import { PhoneAndroidRounded } from "@mui/icons-material";
import Button from "@restart/ui/esm/Button";
import { Col, Container } from "react-bootstrap";
import image3 from "../../assets/6.jpeg";

const Sec6 = () => {
  return (
    <div className="sec6 py-5">
      <Container>
        <div className="d-lg-flex d-grid justify-content-between">
          <Col md="12" lg="5" className="d-flex justify-content-end">
            <div className="sec6__image">
              <img src={image3} className="w-100 h-100" alt="" />
            </div>
          </Col>
          <Col md="12" lg="6" className="d-grid mt-lg-0 my-5">
            <h3>MOBILE READY</h3>
            <hr className="w-25 my-4" />
            <p className=" my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Nulla consequat massa
              quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer
              tincidunt. Cras dapibus. Vivamus elementum semper nisi.Aenean
              vulputate eleifend tellus.
            </p>
            <hr className="w-25 my-4" />
            <Button className="py-2">
              <PhoneAndroidRounded /> learn more...
            </Button>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Sec6;
