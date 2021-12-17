import { Twitter, Wifi } from "@mui/icons-material";
import { Col, Container } from "react-bootstrap";
import "../style/footer.css";
import image3 from "../assets/6.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer  mt-4">
      <div className="footer__top ">
        <Container>
          <div className="d-lg-flex d-grid py-5">
            <Col md="12" lg="3" className="mb-5">
              <h6>INTERESTING LINKS</h6>
              <div className="text-white">
                Bellow are some interesting links for you! Enjoy your stay :
              </div>
              <div className="d-flex mt-4 justify-content-evenly">
                <div className="d-flex">
                  <Twitter color="info" fontSize="large" />
                  <div className="d-grid">
                    <span> follow </span>
                    <span> Twitter </span>
                  </div>
                </div>
                <div className="d-flex">
                  <Wifi color="info" fontSize="large" />
                  <div className="d-grid">
                    <span> follow </span>
                    <span> Twitter </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="12" lg="3" className="mb-5">
              <h6>LATEST NEWS</h6>
              <div className="">
                <div className="d-flex">
                  <div className="footer__img  mx-1">
                    <img className="w-100 h-100" src={image3} alt="" />
                  </div>
                  <div className="">Bellow are some interesting links</div>
                </div>
                <div className="d-flex my-4">
                  <div className="footer__img  mx-1">
                    <img className="w-100 h-100" src={image3} alt="" />
                  </div>
                  <div className="">Bellow are some interesting links</div>
                </div>
                <div className="d-flex">
                  <div className="footer__img  mx-1">
                    <img className="w-100 h-100" src={image3} alt="" />
                  </div>
                  <div className="">Bellow are some interesting links</div>
                </div>
              </div>
            </Col>
            <Col md="12" lg="3" className="mb-5">
              <h6>TAGS</h6>
              <div className="">
                <span className="border mx-1 px-1">dsd</span>
                <span className="border mx-1 px-1">dsd</span>
                <span className="border mx-1 px-1">dsd</span>
                <span className="border mx-1 px-1">dsd</span>
              </div>
              <h6 className="mt-4">CATEGORIES</h6>
              <div className="d-grid">
                <span className=" mx-1 px-1">dsd</span>
                <span className=" mx-1 px-1">dsd</span>
                <span className=" mx-1 px-1">dsd</span>
                <span className=" mx-1 px-1">dsd</span>
              </div>
            </Col>
            <Col md="12" lg="3" className="mb-5">
              <h6>BUSINESS HOURS</h6>
              <div>
                Our support Hotline is available 24 <br /> Hours a day: (555)
                343 456 7891
                <br /> Monday-Friday: 9am to 5pm <br />
                Saturday: 10am to 2pm
                <br /> Sunday: Closed
              </div>
            </Col>
          </div>
        </Container>
      </div>
      <div className="footer__bottom py-3 d-flex px-5">
        <Col lg="2" className="d-flex justify-content-center ">
          FARNOOD
        </Col>
        <Col lg="8">
          <div className="d-flex">
            <ul className="d-flex justify-content-end w-100">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">portfolio</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Footer;
