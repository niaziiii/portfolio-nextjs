"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { AboutMeIntroduction, Specialties } from "@/components";
import skills from "../../assets/data/skillsData";
import tools from "../../assets/data/toolData";

export default function About() {
  return (
    <div className="text-white max-w-6xl mx-auto px-4">
      <AboutMeIntroduction />

      <div className="my-24">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-main mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-main">Professional</span> Skillset
          </h2>
          <div className="h-px w-12 bg-main ml-4"></div>
        </div>
        <Specialties data={skills} />
      </div>

      <div className="my-24">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-main mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-main">Tools</span> I Use
          </h2>
          <div className="h-px w-12 bg-main ml-4"></div>
        </div>
        <Specialties data={tools} />
      </div>

      <div className="my-24 mb-32">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-main mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span>Open-Source</span>{" "}
            <span className="text-main">Contributions</span>
          </h2>
          <div className="h-px w-12 bg-main ml-4"></div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <p className="text-center text-gray-300 mb-6">
            My GitHub contributions over the past year
          </p>
          <div className="flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar
              username="niaziiii"
              color="#00ff0a"
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
              className="px-6 py-2 bg-gray-700 hover:bg-main transition-colors duration-300 rounded-md text-white"
            >
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
