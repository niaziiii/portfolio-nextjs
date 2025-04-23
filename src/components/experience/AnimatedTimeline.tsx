"use client";

import React, { useRef, useEffect } from "react";

interface TimelineProps {
  experiences: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setShowImageModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedTimeline: React.FC<TimelineProps> = ({
  experiences,
  activeIndex,
  setActiveIndex,
  setShowImageModal,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleTimelineClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (index !== activeIndex && setShowImageModal) {
      setShowImageModal(false);
    }

    setTimeout(() => {
      setActiveIndex(index);
    }, 10);
  };

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-5" ref={timelineRef}>
      <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
        <svg
          className="w-5 h-5 mr-2"
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
        Career Timeline
      </h3>

      <div className="relative">
        <div
          className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-700 rounded-full"
          aria-hidden="true"
        ></div>

        <div className="flex flex-col space-y-1" role="list">
          {experiences.map((experience, index) => (
            <button
              key={index}
              data-index={index}
              onClick={(e) => handleTimelineClick(index, e)}
              className={`text-left px-4 py-4 transition-all duration-300 rounded-lg flex items-start relative ${
                activeIndex === index
                  ? "bg-gray-800 bg-opacity-15"
                  : "hover:bg-gray-800"
              }`}
              role="listitem"
              aria-current={activeIndex === index ? "true" : "false"}
            >
              <div className="mr-4 mt-1 relative">
                <div
                  className={`w-4 h-4 rounded-full border-2 z-10 relative ${
                    activeIndex === index
                      ? "border-primary bg-blue-900"
                      : "border-gray-600 bg-gray-800"
                  }`}
                  aria-hidden="true"
                ></div>

                {activeIndex === index && (
                  <div
                    className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75"
                    aria-hidden="true"
                  ></div>
                )}
              </div>

              <div
                className={`transition-all duration-300 ${
                  activeIndex === index ? "transform translate-x-1" : ""
                }`}
              >
                <h4
                  className={`font-medium text-lg ${
                    activeIndex === index ? "text-blue-400" : "text-gray-200"
                  }`}
                >
                  {experience.companyName}
                </h4>
                <p className="text-sm text-gray-400 mb-1">
                  {experience.jobTitle}
                </p>
                <p className="text-xs text-gray-500">{experience.date}</p>
              </div>

              {activeIndex === index && (
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
