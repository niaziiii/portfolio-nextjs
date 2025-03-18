import React from "react";
import { VerticalLinearStepper } from "@/components";

const Experience = () => {
  return (
    <div className="text-white max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-main">Experience</span>
          </h1>
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-main"></div>
        </div>

        <p className="text-gray-300 text-lg max-w-3xl">
          My journey as a MERN Stack Developer, building high-performance web
          applications and delivering enterprise solutions across different
          organizations.
        </p>
      </div>

      <div>
        <VerticalLinearStepper />
      </div>
    </div>
  );
};

export default Experience;
