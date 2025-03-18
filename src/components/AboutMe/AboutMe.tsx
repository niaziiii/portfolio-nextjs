import React from "react";
import { GiCook, GiHiking, GiBookCover } from "react-icons/gi";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import Lottie from "lottie-react";
import hobbyAnimation from "../../assets/animations/hobby__animation.json";

const AboutMeIntroduction = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-3/5">
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Know Who <span className="text-main">I AM</span>
            </h1>
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-main"></div>
          </div>

          <div className="space-y-4 text-lg">
            <p className="">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-main rounded-full"></span>
              Hi Everyone, I'm{" "}
              <span className="text-main font-semibold ml-1">
                Muhabat Khan Niazi
              </span>{" "}
              from
              <span className="inline-flex items-center ml-1">
                <FaMapMarkerAlt className="text-main mr-1" />
                <span className="text-main font-semibold">
                  Multan, Pakistan
                </span>
              </span>
              .
            </p>

            <p className="">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-main rounded-full"></span>
              I'm a{" "}
              <span className="text-main font-semibold ml-1">
                MERN Stack Developer
              </span>{" "}
              with
              <span className="inline-flex items-center ml-1">
                <FaRegClock className="text-main mx-1" />
                <span className="text-main font-semibold">3+ years</span>
              </span>
              of experience building high-performance web applications.
            </p>

            <p className="">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-main rounded-full"></span>
              My expertise includes React.js, Next.js, Node.js and various
              modern JavaScript libraries and frameworks.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Beyond coding, I enjoy:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                  <GiBookCover className="text-4xl text-main mb-2" />
                  <span>Documentaries</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                  <GiCook className="text-4xl text-main mb-2" />
                  <span>Cooking</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-lg hover:bg-gray-700/40 transition-colors duration-300">
                  <GiHiking className="text-4xl text-main mb-2" />
                  <span>Hiking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 bg-main opacity-10 rounded-full blur-3xl"></div>
            <Lottie animationData={hobbyAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeIntroduction;
