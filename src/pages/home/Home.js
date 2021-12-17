import Slider from "../../components/Slider";
import "../../style/page/home.css";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Sec6 from "./Sec6";
import Sec7 from "./Sec7";
import Sec8 from "./Sec8";
import Sec9 from "./Sec9";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
    </div>
  );
};

export default Home;
