"use client";
import React, { useState, useEffect } from "react";
import { experienceData } from "@/assets/data/experience";

import ProjectCard from "@/components/experience/ProjectCard";
import AnimatedTimeline from "@/components/experience/AnimatedTimeline";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className="text-white max-w-6xl mx-auto px-4 py-12">
      <div
        className={`mb-12 transition-all duration-700 transform ${
          isPageLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h1>
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary"></div>
        </div>

        <p className="text-gray-300 text-lg max-w-3xl">
          My journey as a MERN Stack Developer, building high-performance web
          applications and delivering enterprise solutions across different
          organizations.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 transition-all duration-700 delay-200 transform ${
          isPageLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <AnimatedTimeline
              experiences={experienceData}
              activeIndex={activeExperience}
              setActiveIndex={setActiveExperience}
              setShowImageModal={setShowImageModal}
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div
            className={`bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500 ${
              isPageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-primary bg-opacity-20 text-white text-sm font-medium rounded-full">
                  {experienceData[activeExperience].jobTitle}
                </span>

                {activeExperience === 0 && (
                  <span className="inline-flex items-center px-3 py-1 bg-green-600 bg-opacity-20 text-white text-sm font-medium rounded-full">
                    <span className="w-2 h-2 bg-green-100 rounded-full mr-2 animate-pulse"></span>
                    Current
                  </span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {experienceData[activeExperience].companyName}
              </h2>
              <p className="text-gray-400 mb-4 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {experienceData[activeExperience].date}
              </p>
              <p className="text-gray-300">
                {experienceData[activeExperience].description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                Key Projects
                <span className="ml-2 bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                  {experienceData[activeExperience].projects.length}
                </span>
              </h3>

              <div className="space-y-8">
                {experienceData[activeExperience].projects.map(
                  (project, index) => (
                    <div
                      key={index}
                      // className="transition-all duration-500 transform hover:translate-y-[-4px]"
                    >
                      <ProjectCard project={project} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between lg:hidden">
            <button
              onClick={() =>
                setActiveExperience((prev) => Math.max(prev - 1, 0))
              }
              disabled={activeExperience === 0}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeExperience === 0
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Previous
            </button>

            <button
              onClick={() =>
                setActiveExperience((prev) =>
                  Math.min(prev + 1, experienceData.length - 1)
                )
              }
              disabled={activeExperience === experienceData.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeExperience === experienceData.length - 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Next
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
