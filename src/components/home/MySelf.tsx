import React from "react";

const MySelf = () => {
  return (
    <div className="max-w-4xl mx-auto text-white mt-8 md:mt-16 px-4">
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
              with{" "}
              <span className="text-primary font-semibold">3+ years</span> of
              professional experience building scalable web applications and
              REST APIs.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Proficient in{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">TypeScript</span>,{" "}
              <span className="text-primary font-semibold">Node.js</span>, and
              cloud deployment with{" "}
              <span className="text-primary font-semibold">AWS</span> &{" "}
              <span className="text-primary font-semibold">Docker</span>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              I take pride in writing clean, maintainable code and{" "}
              <span className="text-primary font-semibold">
                optimizing application performance
              </span>{" "}
              — from streamlining database queries to delivering reliable,
              intuitive user experiences across{" "}
              <span className="text-primary font-semibold">
                multi-store and SaaS platforms
              </span>
              .
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Available for full-time roles with async-friendly teams. Feel
              free to{" "}
              <a
                href="https://www.linkedin.com/in/muhabat-khan-niazi-926854192/"
                className="text-primary border-b border-primary hover:opacity-80 transition-opacity"
              >
                connect with me on LinkedIn
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
