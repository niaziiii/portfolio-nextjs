"use client";
import React from "react";
import Lottie from "lottie-react";
import backAnimation from "../../assets/animations/back__animation.json";

const BackgroundAnimation = () => {
  return (
    <div className="fixed h-full top-0 left-0 w-full -z-10">
      <Lottie
        className=" scale-300 md:scale-150 "
        animationData={backAnimation}
        loop={true}
      />
    </div>
  );
};

export default BackgroundAnimation;
