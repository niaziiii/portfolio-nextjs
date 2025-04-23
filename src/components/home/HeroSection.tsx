"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import homeAnimation from "@/assets/animations/home__animation.json";
import handAnimation from "@/assets/animations/hand__animation.json";

const HeroSection = () => {
  const Im: string[] = [
    "Node Js Developer",
    "Graphql Developer",
    "React Js developer",
    "React Js developer",
    "Html developer",
    "Front-End developer",
    "Back-End developer",
  ];

  const [count, setCount] = useState<{ count: number }>({ count: 0 });

  useEffect(() => {
    const total = Im.length - 1;
    const getItems = () => {
      setCount((prev) => {
        if (prev.count >= total) return { count: 0 };
        else return { count: prev.count + 1 };
      });
    };
    const interval = setInterval(() => getItems(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [Im.length]);
  return (
    <div className="flex flex-col items-center justify-around min-h-[80vh] m-auto md:flex-row  text-white">
      <div className=" flex flex-col mt-8  md:mt-0">
        <h2 className="text-xl font-extrabolde flex  items-end mb-4 md:mb-7 md:text-2xl">
          Hi There!
          <i className="w-14">
            <Lottie animationData={handAnimation} />
          </i>
        </h2>
        <h1 className=" text-4xl leading-1/2 mb-6  md:mb-8 md:text-5xl">
          I'M <b className="text-primary">Muhabat Khan Niazi </b>
          (un) popularly known as <b className="text-primary">“NiaziOnTop”</b>
        </h1>
        <div>
          {[count].map((el, i) => (
            <h2
              key={i}
              className="text-2xl font-semibold text-primary truncate animate-bounce md:text-4xl"
            >
              {Im[count.count]}
            </h2>
          ))}
        </div>
      </div>
      <div className="flex -mt-4  min-w-2 md:mt-0 md:scale-130">
        <Lottie animationData={homeAnimation} />
      </div>
    </div>
  );
};

export default HeroSection;
