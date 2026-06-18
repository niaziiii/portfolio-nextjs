"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import homeAnimation from "@/assets/animations/home__animation.json";
import handAnimation from "@/assets/animations/hand__animation.json";

const HeroSection = () => {
  const Im: string[] = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
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
    <div className="flex flex-col items-center justify-around min-h-[80vh] m-auto md:flex-row text-white">
      <div className="flex flex-col mt-2 md:mt-0 md:w-[50%]">
        <h2 className="text-xl font-extrabolde flex items-end mb-4 md:mb-7 md:text-2xl">
          Hi There!
          <i className="w-14">
            <Lottie animationData={handAnimation} />
          </i>
        </h2>
        <h1 className="text-4xl leading-[1.15] mb-6 md:mb-8 md:text-5xl">
          I'M <b className="text-primary">Muhabat Khan Niazi</b>
        </h1>
        <div>
          {[count].map((el, i) => (
            <h2
              key={i}
              className="text-2xl font-semibold text-primary animate-bounce md:text-4xl"
            >
              {Im[count.count]}
            </h2>
          ))}
        </div>

        <p className="mt-5 max-w-md text-base text-gray-300 md:text-lg">
          I build fast, scalable web apps end-to-end — from polished{" "}
          <span className="text-primary font-semibold">React</span> &{" "}
          <span className="text-primary font-semibold">Next.js</span> interfaces
          to robust <span className="text-primary font-semibold">Node.js</span>{" "}
          APIs.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:!text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="flex md:w-[50%] -mt-4 min-w-2 md:mt-0 md:scale-130">
        <Lottie animationData={homeAnimation} />
      </div>
    </div>
  );
};

export default HeroSection;
