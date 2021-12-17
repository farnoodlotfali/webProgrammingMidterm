import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  const location = useLocation();
  const [state, setstate] = useState(0);
  useEffect(() => {
    switch (location.pathname) {
      case "/shop":
        setstate(2);
        break;
      case "/":
        setstate(0);
        break;
      case "/portfolio":
        setstate(1);
        break;

      default:
        setstate(0);
        break;
    }
  }, [location.pathname]);
  return (
    <div className="header bg-white text-black p-4 ">
      <Container>
        <div className="d-flex justify-content-between">
          <Col lg="2">
            <h4 className="text-danger m-0">FARNOOD</h4>
          </Col>
          <Col lg="8">
            <div className="d-flex">
              <ul className="d-flex justify-content-center w-100">
                <li className={`${state === 0 && "active"}`}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`${state === 1 && "active"}`}>
                  <Link to="/portfolio">portfolio</Link>
                </li>
                <li className={`${state === 2 && "active"}`}>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Header;
