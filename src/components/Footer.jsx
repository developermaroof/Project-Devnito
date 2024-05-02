import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.init("Fdw9Lui_H7KZO3dgw");

    const { fullName, email, number, description } = formData;

    if (!fullName || !email || !number || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_siope3o",
        "template_695wyk8",
        {
          from_name: fullName,
          to_email: email,
          message: description,
          reply_to: email,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        description: "",
      });
    } catch (error) {
      console.log("FAILED...", error, error.text);
    }
  };
  return (
    <div id="location" className="bg-black">
      <div className=" xl:max-w-screen-xl xl:mx-auto">
        <div className="text-white justify-center p-4 md:flex md:p-8 md:gap-10 md:items-center lg:px-20">
          {/*  */}
          <div className="md:flex md:flex-col">
            <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">
              EMAIL
            </h1>
            <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
              contact@devnito.com
            </p>

            <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">
              PHONE
            </h1>
            <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
              +971 5680 81527
            </p>

            <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">
              ADDRESS
            </h1>
            <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
              Meydan Hotel, Nad Al-Sheba, Dubai - UAE
            </p>
          </div>

          {/*  */}
          <div className="mt-8 p-2">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
              Let's Start a Project Together
            </h1>

            <div className="bg-primary w-48 h-0.5 my-4"></div>
            <p className="text-sm md:text-md lg:text-lg">
              Let’s discuss your project and find out how we can help you scale!
            </p>
            <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
              />
              <input
                type="number"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="rounded bg-primary p-2 mt-6 text-center items-center justify-center lg:text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="text-white p-4 flex text-center justify-center items-center">
          <p className="text-xs md:text-sm lg:text-lg">
            COPYRIGHT 2024 DevNito ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
