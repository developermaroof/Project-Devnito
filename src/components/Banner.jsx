import React from "react";

const Banner = () => {
  return (
    // Banner
    <div className="pb-4 font-sans bg-black text-white sm:flex sm:flex-row">
      {/* Intro */}
      <div
        id="Bannerr"
        className="px-4 sm:px-8 lg:px-20 xl:px-28  sm:justify-center  sm:flex sm:flex-col "
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl flex flex-wrap">
          Transform Your Business with
          <span className="text-primary"> DevNito</span>
        </h1>
        <p className="text-xs sm:text-sm py-4">
          DevNito is offering custom software and SaaS solutions to businesses
          worldwide. With a focus on tailored excellence, transparent
          collaboration, and client-centricity, we aim to elevate your business
          to new heights.
        </p>
        <button className="bg-primary rounded-md py-1 px-8  sm:py-2 sm:w-44">
          <a href="https://www.linkedin.com/company/devnito/">LET'S TALK</a>
        </button>
      </div>

      {/* Form */}
      <div className="px-4 flex justify-center items-center ">
        <div className="bg-white w-64 md:w-80 lg:w-96  px-10  py-6 rounded-xl text-black my-8 mx-4 sm:mx-4  lg:mx-16 xl:mx-28 flex justify-center items-center">
          <form
            className="flex flex-col justify-center items-center lg:w-96"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const fullName = formData.get("fullName");
              const email = formData.get("email");
              const number = formData.get("number");
              const description = formData.get("description");

              if (!fullName || !email || !number || !description) {
                alert("Please fill in all required fields.");
                return;
              }
              alert(
                `Full Name: ${fullName}\nEmail: ${email}\nNumber: ${number}\nDescription: ${description}`
              );
            }}
          >
            <h2 className="font-semibold text-md lg:text-lg text-center mx-auto mb-4">
              Let's Start a Project Together
            </h2>
            <div className="bg-primary rounded text-primary h-0.5 w-44 sm:w-44 lg:w-48 mt-1 mb-4 mx-auto"></div>
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
              type="number"
              name="number"
              placeholder="Number"
              required
            />
            <textarea
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
              name="description"
              placeholder="Describe Your Project Need."
              required
              rows="4"
            ></textarea>
            <button
              className="text-white bg-primary rounded-md py-1.5 w-full mt-5 mb-1"
              type="submit"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
