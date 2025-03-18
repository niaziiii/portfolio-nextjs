import { Contact } from "@/components";
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Page = () => {
  return (
    <div className="text-white max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-main">Connect</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-xl border border-gray-800 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 md:p-12">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="inline-block w-8 h-1 bg-main mr-3"></span>
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out to me! I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-main/10 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-main text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:Muhabatkhanx@gmail.com"
                      className="text-white hover:text-main transition-colors"
                    >
                      Muhabatkhanx@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-main/10 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-main text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Location
                    </h3>
                    <p className="text-white">
                      Gulberg greens, Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="inline-block w-6 h-1 bg-main mr-2"></span>
                  Find Me On
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/niaziiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/niaziiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>

              {/* <div className="hidden md:block mt-12">
                <SvgContact />
              </div> */}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8 md:p-12">
            {/* <div className="md:hidden mb-8">
              <SvgContact />
            </div> */}

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-main mr-3"></span>
              Send Me a Message
            </h2>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
