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
              Delivered measurable results including{" "}
              <span className="text-primary font-semibold">
                faster database performance
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">
                95% user satisfaction
              </span>{" "}
              across multi-store and SaaS platforms.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Available for full-time roles with async-friendly teams. Feel
              free to{" "}
              <a
                href="https://linkedin.com/in/niaziiii"
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
