import "./Banner.scss";
import Button from "../Button/Button.jsx";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: "url('sky.jpg')" }}>
      <h3>Hello There I Am</h3>
      <h1>G7M7T1</h1>
      <h3>Developer / Content Creator / Graphic Designer</h3>
      <div className="buttons">
        <Button>Check Blog</Button>
        <Button>About Me</Button>
      </div>
    </div>
  );
};

export default Banner;
