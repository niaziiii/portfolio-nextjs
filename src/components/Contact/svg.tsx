"use client";
import React from "react";
import ContactUs from "../../assets/animations/contact-us__animation.json";
import Lottie from "lottie-react";

const SvgContact = () => {
  return (
    <div>
      <Lottie width={"100%"} height={"15rem"} animationData={ContactUs} />
    </div>
  );
};

export default SvgContact;
