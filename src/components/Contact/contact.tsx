"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting(true);

    console.log(data);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400">
          <FaUser />
        </div>
        <input
          className={`w-full bg-gray-800/50 border ${
            errors.fullName ? "border-red-500" : "border-gray-700"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50 transition-all duration-200`}
          type="text"
          placeholder="Your Name"
          {...register("fullName", {
            required: "Name is required",
            minLength: { value: 2, message: "Name is too short" },
          })}
        />
        {errors.fullName && (
          <p className="text-sm text-red-500 mt-1 ml-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400">
          <FaEnvelope />
        </div>
        <input
          className={`w-full bg-gray-800/50 border ${
            errors.email ? "border-red-500" : "border-gray-700"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50 transition-all duration-200`}
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1 ml-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-0 top-3 pl-3 text-gray-400">
          <FaCommentAlt />
        </div>
        <textarea
          className={`w-full bg-gray-800/50 border ${
            errors.message ? "border-red-500" : "border-gray-700"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/50 transition-all duration-200 min-h-[150px] resize-y`}
          placeholder="Your Message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message is too short" },
          })}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1 ml-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitSuccess && (
        <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center ${
          isSubmitting ? "bg-gray-700" : "bg-main hover:bg-main/90"
        } text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane className="mr-2" /> Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default Contact;
