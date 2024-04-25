import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-primary">
      <div className=" p-4 flex flex-col justify-center items-center text-center py-8 xl:max-w-screen-xl xl:mx-auto">
        <div className="text-white flex flex-col gap-4">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            Ready to Discuss Your Project?
          </h1>
          <p className="text-sm">
            We're excited to help you achieve your goals and transform them into
            a top-notch digital solution. Claim your free consultation now!
          </p>
          <div>
            <button className="border-2 rounded-full text-sm font-semibold py-2 my-2 w-48  justify-center">
              <a href="https://www.linkedin.com/company/devnito/">
                Book A Quick Call!
              </a>
            </button>
          </div>
          <p className="text-sm">
            Or, drop your details in the form below to share your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
