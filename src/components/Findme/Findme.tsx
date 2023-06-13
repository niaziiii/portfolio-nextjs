import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const FindMe = () => {
  return (
    <div className="text-white text-center mt-24 pb-12">
      <h1 className=" text-2xl md:text-4xl mb-2 text-center">FIND ME ON</h1>
      <p className="text-base md:text-lg mb-6">
        Feel free to <b className="text-main">connect</b> with me
      </p>
      <ul className="mb-6 flex justify-center items-center gap-4">
        <li className="bg-white rounded-full custom-shadow">
          <a
            href="https://github.com/niaziiii"
            className=" text-3xl cursor-pointer text-black"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="bg-white rounded-full custom-shadow">
          <a
            href="https://twitter.com/MuhabatNiazi"
            className=" text-3xl cursor-pointer text-black"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="bg-white rounded-full custom-shadow">
          <a
            href="https://www.linkedin.com/in/muhabat-khan-niazi-926854192/"
            className=" text-3xl cursor-pointer text-black"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className="bg-white rounded-full custom-shadow">
          <a
            href="tel:923083909131"
            className=" text-3xl cursor-pointer text-black"
          >
            <AiOutlineWhatsApp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FindMe;
