import { Col, Container } from "react-bootstrap";
import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/3.jpeg";
const Sec7 = () => {
  return (
    <div className="sec7 py-5">
      <Container>
        <h2 className="text-center">WHAT OTHERS SAY ABOUT US</h2>
        <hr className="w-25 mx-auto my-5" />
        <div className="d-lg-flex d-grid mx-5">
          <Col
            md="12"
            lg="6"
            className="d-flex justify-content-evenly py-2 sec7__borderTopLeftMo"
          >
            <div className="sec7__img">
              <img className="w-100 h-100" src={image1} alt="" />
            </div>

            <div className="w-75 ">
              <p className="text-muted ">
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
              <div className="d-grid">
                <span> Cras dapibus</span>
                <span>
                  Marketing – <span className="text-danger">WikiTravel</span>
                </span>
              </div>
            </div>
          </Col>
          <Col
            md="12"
            lg="6"
            className="sec7__borderLeft d-flex justify-content-evenly py-2"
          >
            <div className="sec7__img">
              <img className="w-100 h-100" src={image2} alt="" />
            </div>

            <div className="w-75 ">
              <p className="text-muted ">
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
              <div className="d-grid">
                <span> Cras dapibus</span>
                <span>
                  Marketing – <span className="text-danger">WikiTravel</span>
                </span>
              </div>
            </div>
          </Col>
        </div>
        <div className="d-lg-flex d-grid mx-5">
          <Col
            md="12"
            lg="6"
            className="sec7__borderTop d-flex justify-content-evenly py-2"
          >
            <div className="sec7__img">
              <img className="w-100 h-100" src={image3} alt="" />
            </div>

            <div className="w-75 ">
              <p className="text-muted ">
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
              <div className="d-grid">
                <span> Cras dapibus</span>
                <span>
                  Marketing – <span className="text-danger">WikiTravel</span>
                </span>
              </div>
            </div>
          </Col>
          <Col
            md="12"
            lg="6"
            className="sec7__borderTopLeft d-flex justify-content-evenly py-2"
          >
            <div className="sec7__img">
              <img className="w-100 h-100" src={image1} alt="" />
            </div>

            <div className="w-75 ">
              <p className="text-muted ">
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
              <div className="d-grid">
                <span> Cras dapibus</span>
                <span>
                  Marketing – <span className="text-danger">WikiTravel</span>
                </span>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Sec7;
