import React from "react";

const MySelf = () => {
  return (
    <div className="max-w-4xl mx-auto text-white mt-16 px-4">
      <div className="relative">
        {/* Background accent */}
        <div className="absolute -left-8 top-0 w-2 h-40 bg-main rounded-full opacity-70 hidden md:block"></div>

        <h1 className="text-3xl md:text-5xl font-bold mb-10 relative">
          LET ME <span className="text-main font-extrabold">INTRODUCE</span>{" "}
          MYSELF
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-main rounded-full"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a{" "}
              <span className="text-main font-semibold">
                MERN Stack Developer
              </span>{" "}
              with over <span className="text-main font-semibold">3 years</span>{" "}
              of experience architecting and developing high-performance,
              scalable web applications.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              My expertise includes{" "}
              <span className="text-main font-semibold">Next.js</span>,{" "}
              <span className="text-main font-semibold">React</span>, and{" "}
              <span className="text-main font-semibold">Node.js</span>, with a
              deep understanding of Redux architecture for efficient state
              management.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              I'm passionate about building innovative{" "}
              <span className="text-main font-semibold">
                Web Technologies and Products
              </span>{" "}
              that deliver exceptional user experiences.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              When I'm not coding, you can find me exploring the latest
              frameworks or contributing to open-source projects. Feel free to{" "}
              <a
                href="https://twitter.com/MuhabatNiazi"
                className="text-main border-b border-main hover:opacity-80 transition-opacity"
              >
                connect with me on Twitter
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-main transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-main">
                Technical Expertise
              </h3>
              <ul className="space-y-3">
                {[
                  "React/Next.js Development",
                  "MERN Stack Architecture",
                  "Redux State Management",
                  "API Integration & Design",
                  "UI/UX Implementation",
                  "Full-Stack Development",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-main rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
