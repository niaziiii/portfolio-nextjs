import React from "react";
import avatar from "../../assets/images/intro.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-11/12 lg:w-4/5 m-auto text-white flex flex-col mt-16 md:flex-row">
      <div className="mb-8">
        <div className="w-full md:w-4/5">
          <h1 className=" text-2xl md:text-4xl mb-10 text-center">
            LET ME <b className="text-main">INTRODUCE</b> MYSELF{" "}
          </h1>
          <p className="text-base md:text-xl mt-6">
            I started learning computer programming in my early teenage and I
            have been pretending to be (
            <a
              className="text-main border-b"
              href="https://twitter.com/MuhabatNiazi"
            >
              Report me on Twitter
            </a>
            ) a professional <b className="text-main">Software Developer </b>
            in the freelancing industry for almost
            <b className="text-main"> 2 years</b> now. 🤷‍♂️
          </p>
          <p className="text-base md:text-xl mt-6">
            I have been able to write the infamous
            <b className="text-main"> Hello, World! </b> in a few languages
            including
            <b className="text-main"> Javascript, C++ and React</b>
          </p>
          <p className="text-base md:text-xl text mt-6">
            I take interest in building new
            <b className="text-main"> Web Technologies an Prodcuts </b>
          </p>
          <p className="text-base md:text-xl mt-6">
            Whenever possible, I also apply my passion for developing products
            using <b className="text-main"> Node.js </b>
            and
            <b className="text-main">
              {" "}
              Modern Javascript Library and Frameworks
            </b>{" "}
            like <b className="text-main">React.js</b>
          </p>
        </div>
      </div>
      <div className=" w-70 md:w-96 ">
        <Image src={avatar} alt="cover" />
      </div>
    </div>
  );
};

export default index;
