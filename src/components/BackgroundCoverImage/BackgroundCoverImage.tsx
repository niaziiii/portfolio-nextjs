"use client";
import React from "react";
import bgImage from "../../assets/images/bg.jpg";
import Image from "next/image";

const BackgroundCoverImage = () => {
  return (
    <div className="fixed h-full top-0 left-0 w-full -z-10 bg-secondary">
      <Image src={bgImage} alt="bgImage" className="h-[100vh]" />
    </div>
  );
};

export default BackgroundCoverImage;
