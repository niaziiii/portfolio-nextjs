"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <span className="uppercase text-sm text-white font-bold">
          Full Name
        </span>
        <input
          className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder=""
          {...register("fullName", { required: true })}
        ></input>
        <p className="text-base text-red-700 h-5 ml-2">
          {errors.fullName ? "The user name is required" : ""}
        </p>
      </div>

      <div className="mt-8">
        <span className="uppercase text-sm text-white font-bold">Email</span>
        <input
          className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          {...register("email", { required: true })}
        ></input>
        <p className="text-base text-red-700 h-5 ml-2">
          {errors.email ? "The user email is required" : ""}
        </p>
      </div>
      <div className="mt-8">
        <span className="uppercase text-sm text-white font-bold">Message</span>
        <textarea
          {...register("message", { required: true })}
          className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
        <p className="text-base text-red-700 h-5 ml-2">
          {errors.message ? "The contact message is required" : ""}
        </p>
      </div>
      <div className="mt-8">
        <button className="uppercase text-sm font-bold tracking-wide bg-btn hover:bg-btn/80 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contact;
