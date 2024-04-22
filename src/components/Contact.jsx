import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary p-4 flex flex-col justify-center items-center text-center py-8">
      <div className="text-white flex flex-col gap-4">
        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
          Ready to Discuss Your Project?
        </h1>
        <p className="text-sm">
          We're excited to help you achieve your goals and transform them into a
          top-notch digital solution. Claim your free consultation now!
        </p>
        <div>
          <button className="border-2 rounded-full text-sm font-semibold py-2 my-2 w-48  justify-center">
            Book A Quick Call!
          </button>
        </div>
        <p className="text-sm">
          Or, drop your details in the form below to share your requirements.
        </p>
      </div>
    </div>
  );
};

export default Contact;
