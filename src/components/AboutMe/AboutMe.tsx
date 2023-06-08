import React from "react";
import { GiCook, GiHiking, GiBookCover } from "react-icons/gi";
import hobbyAnimation from "../../assets/animations/hobby__animation.json";
import Lottie from "lottie-react";

const AboutMe = () => {
  return (
    <div>
      <div className="flex justify-between items-center flex-col min-h-1/3 md:flex-row">
        <div className="mt-6 md:mt-0">
          <h1 className="justify-center text-4xl flex-wrap flex gap-x-2 mb-6">
            Know Who <b className="text-main ">I'M</b>
          </h1>
          <p className="text-lg mb-2  gap-x-2 flex-wrap">
            Hi Everyone, I am <b className="text-main ">Muhabat Khan Niazi</b>{" "}
            from <b className="text-main ">Multan, Pakistan</b>.
          </p>
          <p className="text-lg mb-2 flex gap-x-2 flex-wrap">
            I am (<b className="text-main ">pretending to be</b>) a professional{" "}
            <b className="text-main ">Software Developer</b> in Industry for
            about 2 years now.
          </p>
          <p className="text-lg mb-2 flex gap-x-2 flex-wrap">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="mt-6">
            <li className="flex items-center gap-4 mb-5 text-2xl">
              <GiBookCover /> Documentries
            </li>
            <li className="flex items-center gap-4 mb-5 text-2xl">
              <GiCook /> Cooking
            </li>
            <li className="flex items-center gap-4 mb-5 text-2xl">
              <GiHiking /> Hiking
            </li>
          </ul>
        </div>
        <div className=" -mt-14 md:mt-0 md:flex-flex-40 ">
          <Lottie animationData={hobbyAnimation} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
