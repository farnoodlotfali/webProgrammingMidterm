import { Button, Col, Container } from "react-bootstrap";
import "../../style/page/shop.css";
import ShopItem from "./ShopItem";
import image1 from "../../assets/7.jpeg";
import image2 from "../../assets/8.jpeg";
import image3 from "../../assets/6.jpeg";
import image4 from "../../assets/2.jpeg";
import image5 from "../../assets/5.jpeg";
import image6 from "../../assets/4.jpeg";
import image7 from "../../assets/3.jpeg";
import { CheckBox } from "@mui/icons-material";

const Shop = () => {
  return (
    <div className="shop ">
      <div className="shop__title d-lg-flex d-grid  justify-content-between py-3 text-muted">
        <h5 className="text-nowrap"> farnood Shop</h5>
        <div className="text-nowrap">hi all i am farnood</div>
      </div>

      <Container className="my-5 shop__items">
        <div className="d-lg-flex d-grid ">
          <Col xs="12" lg="8" className="border_right">
            <Button className="mx-3">sort by name</Button>
            <Button>display</Button>

            <div className="d-flex flex-wrap my-4 mx-5">
              <ShopItem img={image1} name={"alidsd"} price={299} />
              <ShopItem img={image2} name={"alidsd"} price={299} />
              <ShopItem img={image3} name={"alidsd"} price={299} />
              <ShopItem img={image4} name={"alidsd"} price={299} />
              <ShopItem img={image5} name={"alidsd"} price={299} />
              <ShopItem img={image6} name={"alidsd"} price={299} />
              <ShopItem img={image7} name={"alidsd"} price={299} />
            </div>
          </Col>
          <Col xs="12" lg="3" className="mt-4 text-muted px-4">
            <div className="mb-3 d-grid">
              <label className="mx-2" htmlFor="">
                username
              </label>
              <input type="text" className="w-75" />
            </div>
            <div className="d-grid mb-3">
              <label className="mx-2" htmlFor="">
                password
              </label>
              <input type="text" className="w-75" />
            </div>
            <div className="d-flex align-items-center">
              <CheckBox />
              <label className="mx-2" htmlFor="">
                Remember Me
              </label>
            </div>
            <div className="login__btn mb-5 mt-2">
              <Button>login</Button>
            </div>
            <div className="">
              <h6>colors</h6>
              <div>
                Black (10) <br /> Blue (6) <br /> Green (5) <br /> Orange (5){" "}
                <br /> Red (8) <br /> White (7) <br /> Yellow (8) <br />
              </div>
            </div>
            <div className="mt-4">
              <h6>sizes</h6>
              <div>
                Large (5) <br />
                Medium (6) <br />
                Small (5) <br />
                X-Large (7) <br />
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
