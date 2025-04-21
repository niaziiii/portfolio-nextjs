"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineAlignRight,
  AiOutlineClose,
  AiOutlineContacts,
} from "react-icons/ai";

const navigations = [
  {
    name: "Home",
    url: "/",
    icon: <AiOutlineHome fontSize={20} />,
  },
  {
    name: "About",
    url: "/about",
    icon: <AiOutlineUser fontSize={20} />,
  },
  {
    name: "Experience",
    url: "/experience",
    icon: <AiOutlineFileText fontSize={20} />,
  },
  {
    name: "Contact Us",
    url: "/contact",
    icon: <AiOutlineContacts fontSize={20} />,
  },
  {
    name: "",
    url: "https://github.com/niaziiii",
    icon: <AiOutlineGithub fontSize={25} />,
  },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const ref: any = useRef(null);

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
    <>
      <div className="z-10 text-white sticky top-0 left-0 py-4 w-full backdrop-blur-md opacity-90 overflow-hidden">
        <div className="w-11/12 py-2  m-auto flex items-center justify-between lg:w-4/5 ">
          {/* logo */}
          <Link href="/">
            <b className=" text-3xl truncate">NiaziOnTop</b>
          </Link>

          {/* desktop */}
          <div className="lists-desktop hidden  md:flex items-center gap-10 ml-auto">
            {navigations.map((navigation, i) => (
              <Link
                href={`${navigation.url}`}
                key={i}
                className="flex items-center gap-1 font-bold"
              >
                {navigation.icon}
                {navigation.name}
              </Link>
            ))}
          </div>

          {/* hamburger */}
          <button className=" block md:hidden">
            <AiOutlineAlignRight onClick={openNavBar} fontSize={30} />
          </button>
        </div>
      </div>

      {/* mobile */}
      <div
        className=" bg-secondary text-white transition-all flex flex-col justify-center p-6 gap-10 z-50 h-[100vh] fixed top-0 right-0 w-[15rem]"
        ref={ref}
        style={{ transform: "translateX(100%)" }}
      >
        <button className="absolute top-2 left-2" onClick={closeNavBar}>
          <AiOutlineClose fontSize={25} />
        </button>

        <Link href="/" onClick={closeNavBar} className="-mt-20">
          <b className=" text-3xl truncate">NiaziOnTop</b>
        </Link>
        {navigations.map((navigation, i) => (
          <Link
            href={`${navigation.url}`}
            key={i}
            onClick={closeNavBar}
            className="flex items-center justify-center gap-1 rounded-lg font-bold bg-main p-2 px-6 w-full hover:bg-main/75"
          >
            {navigation.icon}
            {navigation.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
