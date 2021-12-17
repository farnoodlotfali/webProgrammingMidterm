import { ArrowForwardRounded } from "@mui/icons-material";

import "../style/ImageHover.css";
const ImageHover = ({ img }) => {
  return (
    <div className="mx-1">
      <div className="imageHover__img ">
        <img src={img} alt="" />
        <div className="imageHover__overlay">
          <div className="imageHover__text">
            <ArrowForwardRounded />
          </div>
        </div>
      </div>
      <div className="border px-2 py-3 bg-white">
        Single Portfolio: 2/3 Gallery
      </div>
    </div>
  );
};

export default ImageHover;
