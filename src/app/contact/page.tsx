import { Contact, SvgContact } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="text-white bg-main-3 rounded-lg shadow-lg py-6 px-6 md:px-12 lg:px-16 xl:px-12 mx-auto my-8">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center mb-10 mt-3">
            Lets talk about everything!
          </h2>
        </div>
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <SvgContact />
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </>
  );
};

export default page;
