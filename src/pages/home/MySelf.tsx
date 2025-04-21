import React from "react";

const MySelf = () => {
  return (
    <div className="max-w-4xl mx-auto text-white mt-16 px-4">
      <div className="relative">
        <div className="absolute -left-8 top-0 w-2 h-40 bg-primary rounded-full opacity-70 hidden md:block"></div>

        <h1 className="text-3xl md:text-5xl font-bold mb-10 relative">
          LET ME <span className="text-primary font-extrabold">INTRODUCE</span>{" "}
          MYSELF
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary rounded-full"></div>
        </h1>

        <div className="gap-8">
          <div className="">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">
                MERN Stack Developer
              </span>{" "}
              with over{" "}
              <span className="text-primary font-semibold">3 years</span> of
              experience architecting and developing high-performance, scalable
              web applications.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              My expertise includes{" "}
              <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">Node.js</span>, with
              a deep understanding of Redux architecture for efficient state
              management.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              I'm passionate about building innovative{" "}
              <span className="text-primary font-semibold">
                Web Technologies and Products
              </span>{" "}
              that deliver exceptional user experiences.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              When I'm not coding, you can find me exploring the latest
              frameworks or contributing to open-source projects. Feel free to{" "}
              <a
                href="https://twitter.com/MuhabatNiazi"
                className="text-primary border-b border-primary hover:opacity-80 transition-opacity"
              >
                connect with me on Twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
