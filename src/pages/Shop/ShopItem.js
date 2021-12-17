import { Button } from "react-bootstrap";

const ShopItem = ({ img, name, price }) => {
  return (
    <div className="shopItem border ">
      <div className="shop__items__image">
        <img className="w-100 h-100" src={img} alt="" />
      </div>
      <div className="d-grid mb-4 p-2">
        <span>{name}</span>
        <span className="text-danger">{price}$</span>
      </div>
      <div className="">
        <Button className="border-0 w-100">display</Button>
      </div>
    </div>
  );
};

export default ShopItem;
