import React from "react";
import Lottie from "lottie-react";
import homeAnimation from "../../assets/animations/home__animation.json";
import handAnimation from "../../assets/animations/hand__animation.json";
import { Introduction } from "..";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-around min-h-1/3 m-auto md:flex-row  text-white">
      <div className=" flex flex-col mt-8  md:mt-0">
        <h2 className="text-4xl font-extrabolde flex  items-center mb-4 md:mb-7 md:text-3xl">
          Hi There!
          <i className="w-14">
            <Lottie animationData={handAnimation} />
          </i>
        </h2>
        <h1 className=" text-4xl leading-1/2 mb-6  md:mb-8 md:text-5xl">
          I'M <b className="text-main">Muhabat Khan Niazi </b>
          (un) popularly known as <b className="text-main">“NiaziOnTop”</b>
        </h1>
        <div>
          <Introduction />
        </div>
      </div>
      <div className="flex -mt-4  min-w-2 md:mt-0 md:scale-130">
        <Lottie animationData={homeAnimation} />
      </div>
    </div>
  );
};

export default HeroSection;
