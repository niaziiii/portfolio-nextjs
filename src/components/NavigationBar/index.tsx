"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineAlignRight,
  AiOutlineStar,
  AiOutlineClose,
} from "react-icons/ai";

const index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    window.onscroll = () => setScrollPosition(window.scrollY);
    () => (window.onscroll = null);
  }, []);

  const closeNavBar = () => {
    ref.current.style.transform = "translateX(100%)";
    setisOpen(false);
  };
  const openNavBar = () => {
    ref.current.style.transform = "translateX(0%)";
    setisOpen(true);
  };

  return (
    <div className="z-10 text-white sticky top-0 left-0 py-4 w-full bg-main backdrop-blur-md opacity-90">
      {scrollPosition > 100 && (
        <div className="w-full absolute transition top-0 left-0 p-4 h-full navbarContainer"></div>
      )}
      <div className=" w-11/12 py-2  m-auto flex items-center justify-between md:w-full md:px-4 lg:px-0 lg:w-4/5 relative">
        <div>
          <Link href="/">
            <b className=" text-3xl truncate">NiaziOnTop</b>
          </Link>
        </div>
        <button className=" block md:hidden">
          <AiOutlineAlignRight onClick={openNavBar} fontSize={30} />
        </button>
        <ul className="hidden gap-4 lg:gap-8 md:flex items-center relative">
          <li className="delay-200 ease-in-out ">
            <Link className="flex gap-y-px items-center" href="/">
              <AiOutlineHome fontSize={20} />
              <p className="pl-1 text-xl">Home</p>
            </Link>
          </li>
          <li className="delay-200 ease-in-out ">
            <Link className="flex gap-y-px items-center" href="/about">
              <AiOutlineUser fontSize={20} />
              <p className="pl-1 text-xl">About</p>
            </Link>
          </li>
          <li className="delay-200 ease-in-out ">
            <Link className="flex gap-y-px items-center" href="/projects">
              <AiOutlineFileText fontSize={20} />
              <p className="pl-1 text-xl">Projects</p>
            </Link>
          </li>
          <li className="delay-200 ease-in-out ">
            <Link className="flex gap-y-px items-center" href="/resume">
              <AiOutlineFundProjectionScreen fontSize={20} />
              <p className="pl-1 text-xl">Resume</p>
            </Link>
          </li>
          <li>
            <a
              className="flex gap-y-px items-center w-full bg-btn  px-5 py-1 rounded-lg"
              href="https://github.com/niaziiii"
            >
              <AiOutlineGithub fontSize={25} />
              <p className="pl-1 text-xl">
                <AiOutlineStar />
              </p>
            </a>
          </li>
        </ul>

        <div
          style={{ transform: "translateX(100%)" }}
          className=" fixed right-0 top-0 bg-main  min-h-screen flex items-center flex-col justify-center w-72  md:hidden duration-300"
          ref={ref}
        >
          <div
            className="rounded overflow-hidden absolute top-4 left-2 cursor-pointer text-white"
            onClick={closeNavBar}
          >
            <AiOutlineClose
              style={{
                color: "white !important",
                background: "#525a6a",
                padding: "4px",
              }}
              fontSize={30}
            />
          </div>

          <h2 className="w-full text-center p-2 text-3xl opacity-100 ">
            Portfolio
          </h2>
          <ul className="items-center p-5 relative w-full">
            <li className="mb-8 py-2 text-center px-6 bg-btn border-b rounded opacity-100">
              <Link
                onClick={closeNavBar}
                className="flex gap-y-px justify-center items-center "
                href="/"
              >
                <AiOutlineHome fontSize={20} />
                <p className="pl-1 text-xl">Home</p>
              </Link>
            </li>
            <li className="mb-8 py-2 px-6 bg-btn border-b rounded opacity-100">
              <Link
                onClick={closeNavBar}
                className="flex gap-y-px justify-center items-center"
                href="/about"
              >
                <AiOutlineUser fontSize={20} />
                <p className="pl-1 text-xl">About</p>
              </Link>
            </li>
            <li className="mb-8 py-2 px-6 bg-btn border-b rounded opacity-100">
              <Link
                onClick={closeNavBar}
                className="flex gap-y-px justify-center items-center"
                href="/projects"
              >
                <AiOutlineFileText fontSize={20} />
                <p className="pl-1 text-xl">Projects</p>
              </Link>
            </li>
            <li className="mb-8 py-2 px-6 bg-btn border-b rounded opacity-100">
              <Link
                onClick={closeNavBar}
                className="flex gap-y-px justify-center items-center"
                href="/resume"
              >
                <AiOutlineFundProjectionScreen fontSize={20} />
                <p className="pl-1 text-xl">Resume</p>
              </Link>
            </li>
            <li>
              <a
                className="flex gap-y-px items-center justify-center w-full bg-black px-5 py-1 rounded-lg"
                href="https://github.com/niaziiii"
              >
                <AiOutlineGithub fontSize={25} />
                <p className="pl-1 text-xl">
                  <AiOutlineStar />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
