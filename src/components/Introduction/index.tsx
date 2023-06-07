"use client";
import React, { useEffect, useState } from "react";

const index = () => {
  const Im: string[] = [
    "Node Js Developer",
    "Graphql Developer",
    "React Js developer",
    "React Js developer",
    "Html developer",
    "FrontEnd developer",
    "BackEnd developer",
  ];

  const [count, setCount] = useState<{ count: number }>({ count: 0 });

  useEffect(() => {
    const total = Im.length - 1;
    const getItems = () => {
      setCount((prev) => {
        if (prev.count >= total) return { count: 0 };
        else return { count: prev.count + 1 };
      });
    };
    const interval = setInterval(() => getItems(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {[count].map((el, i) => (
        <h2
          key={i}
          className="text-2xl text-main truncate animate-bounce md:text-4xl"
        >
          {Im[count.count]}
        </h2>
      ))}
    </div>
  );
};

export default index;
