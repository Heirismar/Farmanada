import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="w-full">
        <Slider {...settings}>
          <div className="w-full">
            <h3>1</h3>
          </div>
          <div className="w-full">
            <h3>2</h3>
          </div>
          <div className="w-full">
            <h3>3</h3>
          </div>
          <div className="w-full">
            <h3>4</h3>
          </div>
          <div className="w-full">
            <h3>5</h3>
          </div>
          <div className="w-full">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
