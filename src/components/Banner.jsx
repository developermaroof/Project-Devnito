import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.init("Fdw9Lui_H7KZO3dgw");

    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_siope3o",
        "template_695wyk8",
        {
          from_name: name,
          to_email: email,
          message: message,
          reply_to: email,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error, error.text);
    }
  };
  return (
    // Banner
    <div className="bg-black">
      <div className="pb-4 font-sans text-white sm:flex sm:flex-row xl:max-w-screen-xl xl:mx-auto">
        {/* Intro */}
        <div
          id="Bannerr"
          className="px-4 sm:px-8 lg:px-20 xl:px-28 sm:justify-center  sm:flex sm:flex-col"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl flex flex-wrap">
            Transform Your Business with
            <span className="text-primary"> DevNito</span>
          </h1>
          <p className="text-xs sm:text-sm py-4">
            DevNito is offering custom software and SaaS solutions to businesses
            worldwide. With a focus on tailored excellence, transparent
            collaboration, and client-centricity, we aim to elevate your
            business to new heights.
          </p>
          <button className="bg-primary rounded-md py-1 px-8  sm:py-2 sm:w-44">
            <a href="https://www.linkedin.com/company/devnito/">LET'S TALK</a>
          </button>
        </div>

        {/* Form */}
        <div className="px-4 flex justify-center items-center">
          <div className="bg-white w-64 md:w-80 lg:w-96 px-10 py-6 rounded-xl text-black my-8 mx-4 sm:mx-4 lg:mx-16 xl:mx-28 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center lg:w-96"
            >
              <h2 className="font-semibold text-md lg:text-lg text-center mx-auto mb-4">
                Let's Start a Project Together
              </h2>
              <div className="bg-primary rounded text-primary h-0.5 w-44 sm:w-44 lg:w-48 mt-1 mb-4 mx-auto"></div>

              <input
                className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
                type="number"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required
              />

              <textarea
                className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs lg:text-sm outline-none text-left"
                name="message"
                placeholder="Describe Your Project Need."
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
              ></textarea>
              <button
                className="text-white bg-primary rounded-md py-1.5 w-full mt-5 mb-1"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
