"use client";
import React, { useState, useRef } from "react";

interface Specialties {
  name: string;
  icon: React.ReactNode;
  background: string;
}

const index = ({ data }: { data: Specialties[] }) => {
  const [_, setIsHovered] = useState(false);
  const ref = useRef();

  const handleMouseEnter = (event: any, data: Specialties) => {
    const classess = [...event.target.classList];
    if (classess.includes("skills"))
      event.target.style.boxShadow = `0 0 5px 2px ${data.background}`;
    setIsHovered(true);
  };

  const handleMouseLeave = (event: any) => {
    const classess = [...event.target.classList];
    if (classess.includes("skills")) event.target.style.boxShadow = `none`;
    setIsHovered(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full rounded-sm">
      {data.map((el: Specialties, i: number) => (
        <div
          key={i}
          onMouseEnter={(e) => handleMouseEnter(e, el)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          style={{ background: el.background }}
          className="skills flex items-center  justify-center py-6 text-center text-7xl rounded-lg duration-75"
        >
          {el.icon as any}
          <p className=" p-1 opacity-70 text-sm  text-white bg-main">
            {el.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default index;
