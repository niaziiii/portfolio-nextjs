"use client";
import React, { useState } from "react";

interface SpecialtiesType {
  name: string;
  icon: React.ReactNode;
  background: string;
}

const Specialties = ({ data }: { data: SpecialtiesType[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item: SpecialtiesType, index: number) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="skills flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300 h-full"
            style={{
              background: `${item.background}10`,
              borderLeft: `3px solid ${item.background}`,
              boxShadow:
                hoveredIndex === index
                  ? `0 10px 20px -10px ${item.background}80`
                  : "none",
              transform:
                hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
            }}
          >
            <div className="text-6xl mb-4" style={{ color: item.background }}>
              {item.icon as React.ReactElement}
            </div>

            <span
              className="font-medium text-white text-center"
              style={{
                textShadow:
                  hoveredIndex === index
                    ? `0 0 8px ${item.background}80`
                    : "none",
              }}
            >
              {item.name}
            </span>

            {/* Experience indicator dots */}
            <div className="flex mt-3 space-x-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i < 3 ? item.background : `${item.background}30`,
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Subtle background glow effect */}
          <div
            className="absolute inset-0 rounded-lg -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
            style={{ background: item.background }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Specialties;
