"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name is too short";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate phone (optional)
    if (formData.phone && !/^\+?[0-9\s\-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(
          error.message || "Failed to send message. Please try again."
        );
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="relative group">
        <div className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400 group-focus-within:text-main transition-colors duration-200">
          <FaUser />
        </div>
        <input
          className={`w-full bg-gray-800/50 border ${
            errors.fullName
              ? "border-red-500"
              : "border-gray-700 focus:border-main"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/30 transition-all duration-200 hover:border-gray-600`}
          type="text"
          name="fullName"
          placeholder="Your Name"
          value={formData.fullName}
          onChange={handleChange}
          aria-label="Full Name"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullname-error" : undefined}
        />
        {errors.fullName && (
          <p
            id="fullname-error"
            className="text-sm text-red-500 mt-1 ml-1"
            role="alert"
          >
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400 group-focus-within:text-main transition-colors duration-200">
          <FaEnvelope />
        </div>
        <input
          className={`w-full bg-gray-800/50 border ${
            errors.email
              ? "border-red-500"
              : "border-gray-700 focus:border-main"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/30 transition-all duration-200 hover:border-gray-600`}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-sm text-red-500 mt-1 ml-1"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400 group-focus-within:text-main transition-colors duration-200">
          <FaPhone />
        </div>
        <input
          className={`w-full bg-gray-800/50 border ${
            errors.phone
              ? "border-red-500"
              : "border-gray-700 focus:border-main"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/30 transition-all duration-200 hover:border-gray-600`}
          type="tel"
          name="phone"
          placeholder="Your Phone (Optional)"
          value={formData.phone}
          onChange={handleChange}
          aria-label="Phone Number"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p
            id="phone-error"
            className="text-sm text-red-500 mt-1 ml-1"
            role="alert"
          >
            {errors.phone}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute left-0 top-3 pl-3 text-gray-400 group-focus-within:text-main transition-colors duration-200">
          <FaCommentAlt />
        </div>
        <textarea
          className={`w-full bg-gray-800/50 border ${
            errors.message
              ? "border-red-500"
              : "border-gray-700 focus:border-main"
          } text-white pl-10 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-main/30 transition-all duration-200 hover:border-gray-600 min-h-[150px] resize-y`}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          aria-label="Message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-red-500 mt-1 ml-1"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {submitSuccess && (
        <div
          className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg flex items-center"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div
          className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg flex items-center"
          role="alert"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center ${
          isSubmitting ? "bg-gray-700" : "bg-main  "
        } text-white font-bold py-3 px-6 rounded-lg transition-all duration-300  relative overflow-hidden group`}
        aria-label="Send Message"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            <span className="flex cursor-pointer p-3 w-full items-center justify-center rounded-xl inset-0 h-full bg-primary transition-all duration-300 ease-in-out">
              <FaPaperPlane className="mr-2" /> Send Message
            </span>
          </>
        )}
      </button>
    </form>
  );
};

export default Contact;
