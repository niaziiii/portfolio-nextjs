"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { AboutMeIntroduction, Specialties } from "@/components";
import skills from "../../assets/data/skillsData";
import tools from "../../assets/data/toolData";

export default function About() {
  return (
    <div className="text-white">
      <AboutMeIntroduction />

      <div className="flex justify-center flex-col">
        <h2 className="flex items-center gap-2 justify-center mb-8 text-3xl">
          <b className="text-main">Professional </b> Skillset
        </h2>
        <Specialties data={skills} />
      </div>

      <div className="flex justify-center flex-col mt-36">
        <h2 className="flex items-center gap-2 justify-center mb-8 text-3xl">
          <b className="text-main">Tools </b> Using
        </h2>
        <Specialties data={tools} />
      </div>

      <div className="flex justify-center flex-col mb-20">
        <h2 className="flex items-center gap-2 justify-center mb-4 text-3xl mt-36">
          Open-Source <b className="text-main">Development</b>
        </h2>
        <div className=" m-auto">
          <GitHubCalendar
            username="niaziiii"
            color="#00ff0a"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </div>
  );
}
