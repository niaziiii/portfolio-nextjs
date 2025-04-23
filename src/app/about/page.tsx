"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import skills from "@/assets/data/skillsData";
import tools from "@/assets/data/toolData";
import AboutMeIntroduction from "@/components/about/AboutMeIntroduction";
import Specialties from "@/components/about/Specialties";

export default function Page() {
  return (
    <div className="text-white max-w-6xl mx-auto px-4">
      <AboutMeIntroduction />

      <div className="my-24">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-primary mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">Professional</span> Skillset
          </h2>
          <div className="h-px w-12 bg-primary ml-4"></div>
        </div>
        <Specialties data={skills} />
      </div>

      <div className="my-24">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-primary mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">Tools</span> I Use
          </h2>
          <div className="h-px w-12 bg-primary ml-4"></div>
        </div>
        <Specialties data={tools} />
      </div>

      <div className="my-24 mb-32">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-primary mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span>Open-Source</span>{" "}
            <span className="text-primary">Contributions</span>
          </h2>
          <div className="h-px w-12 bg-primary ml-4"></div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <p className="text-center text-gray-300 mb-6">
            My GitHub contributions over the past year
          </p>
          <div className="flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar
              username="niaziiii"
              year={new Date().getFullYear()}
              fontSize={14}
              hideColorLegend
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="https://github.com/niaziiii"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-700 hover:bg-primary transition-colors duration-300 rounded-md text-white"
            >
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
