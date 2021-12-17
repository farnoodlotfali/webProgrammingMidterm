const Sec4Img = ({ image, setImg }) => {
  return (
    <div className="sec4__small__img" onClick={() => setImg(image)}>
      <img className="h-100 w-100" src={image} alt="" />
    </div>
  );
};

export default Sec4Img;
