"use client";
import Contact from "@/components/contact/Contact";
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const Page = () => {
  return (
    <div className="min-h-screen  text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Connect</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-8 md:p-12">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="inline-block w-8 h-1 bg-gradient-to-r from-main to-main/70 mr-3"></span>
                    Contact Information
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Feel free to reach out to me! I'll get back to you as soon
                    as possible. Let's turn your ideas into reality.
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start group"
                  >
                    <div className="bg-main/10 p-3 rounded-lg mr-4 group-hover:bg-main/20 transition-all duration-300">
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
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start group"
                  >
                    <div className="bg-main/10 p-3 rounded-lg mr-4 group-hover:bg-main/20 transition-all duration-300">
                      <FaPhoneAlt className="text-main text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+923083909131"
                        className="text-white hover:text-main transition-colors"
                      >
                        +92 308 3909131
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start group"
                  >
                    <div className="bg-main/10 p-3 rounded-lg mr-4 group-hover:bg-main/20 transition-all duration-300">
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
                  </motion.div>
                </div>

                <div className="mt-auto mx-auto">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="inline-block w-6 h-1 bg-gradient-to-r from-main to-main/70 mr-2"></span>
                    Find Me On
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -5, backgroundColor: "#333" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      href="https://github.com/niaziiii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5, backgroundColor: "#0077B5" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      href="https://linkedin.com/in/niaziiii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5, backgroundColor: "#1DA1F2" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      href="https://twitter.com/niaziiii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <FaTwitter className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="p-8 md:p-12 bg-black/20"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-block w-8 h-1 bg-gradient-to-r from-main to-main/70 mr-3"></span>
                Send Me a Message
              </h2>

              <Contact />
            </motion.div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-16 rounded-2xl overflow-hidden h-64 shadow-lg border border-gray-800/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13283.22218911563!2d73.05918082953392!3d33.69130548070576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5c75dc830d%3A0x9a56ac9777e42343!2sGulberg%20Greens%20Islamabad%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1714064119980!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
