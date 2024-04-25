import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const smoothScrollTo = (ref) => {
    const element = document.getElementById(ref);
    const scrollTop = element.offsetTop;
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black sticky top-0 z-50">
      <nav className=" px-4 sm:px-8 lg:px-20 xl:px-28 font-sans font-medium   xl:max-w-screen-xl xl:mx-auto">
        <div className="flex mx-auto justify-between items-center py-1">
          <a href="#top" onClick={scrollToTop}>
            <img
              className="w-24 h-auto sm:w-28 lg:w-32 cursor-pointer filter invert"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=448,fit=crop,q=95/Yg2L97XkEKFBOPbq/inline-mxB86Dv8WJTN9WL4.png"
              alt=""
            />
          </a>

          <div className="hidden md:flex space-x-4 md:space-x-5 lg:space-x-6">
            {/* Hide on screens smaller than md (medium) */}
            <a
              href="#home"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={scrollToTop}
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={() => smoothScrollTo("projects")}
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={() => smoothScrollTo("services")}
            >
              Services
            </a>
            <a
              href="#solution"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={() => smoothScrollTo("solution")}
            >
              Solution
            </a>
            <a
              href="#technologies"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={() => smoothScrollTo("technologies")}
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="hover:text-primary text-white text-xs lg:text-sm"
              onClick={() => smoothScrollTo("contact")}
            >
              Contact
            </a>
            <a
              href="#location"
              className="hover:text-primary text-white text-xs  lg:text-sm"
              onClick={() => smoothScrollTo("location")}
            >
              Location
            </a>
          </div>
          <button className="hidden md:block lg:py-3 bg-primary text-white uppercase rounded-md text-xs  py-2 px-4">
            <a href="https://www.linkedin.com/company/devnito/">
              Get a Proposal
            </a>
          </button>
          <div className="flex md:hidden space-x-4">
            {/* Show on screens smaller than md (medium) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              x="0px"
              y="0px"
              width="25"
              height="25"
              className="fill-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              overflow="hidden"
              className={`fill-white cursor-pointer ${
                isMobileMenuOpen ? "" : "hidden"
              }`}
              onClick={toggleMobileMenu}
            >
              <path d="M810.66 170.66q18.33 0 30.495 12.165t12.165 30.495q0 18.002-12.33 30.33L572.315 511.98 840.99 780.308q12.329 12.33 12.329 30.331 0 18.33-12.165 30.495T810.66 853.3q-18.002 0-30.331-12.329L512 572.293 243.671 840.97q-12.329 12.33-30.33 12.33-18.33 0-30.496-12.166T170.68 810.64q0-18.002 12.33-30.33l268.676-268.33L183.01 243.652q-12.329-12.33-12.329-30.331 0-18.33 12.165-30.495t30.495-12.165q18.002 0 30.331 12.329L512 451.666l268.329-268.677q12.329-12.33 30.33-12.33z"></path>
            </svg>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end h-16 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              x="0px"
              y="0px"
              width="25"
              height="25"
              className="fill-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center mt-20 xl:max-w-screen-xl xl:mx-auto">
            <a
              href="#home"
              className="hover:text-primary text-white py-4"
              onClick={scrollToTop}
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("projects")}
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("services")}
            >
              Services
            </a>
            <a
              href="#solution"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("solution")}
            >
              Solution
            </a>
            <a
              href="#technologies"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("technologies")}
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("contact")}
            >
              Contact
            </a>
            <a
              href="#location"
              className="hover:text-primary text-white py-4"
              onClick={() => smoothScrollTo("location")}
            >
              Location
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
