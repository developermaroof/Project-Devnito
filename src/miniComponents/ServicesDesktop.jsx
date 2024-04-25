import React from "react";
import "../Stylings/servicesDesktop.css";

const ServicesDesktop = () => {
  return (
    <div className="flex">
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-96 opacity-90 "
          />
          <div className="bg-black bg-opacity-50 w-full h-96 absolute top-0 left-0"></div>

          <div className="md:hidden lg:block lg:flex lg:flex-col lg:items-center lg:justify-end lg:w-36 lg:mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="webdevelopment"
              width="35"
              height="35"
            >
              <g
                data-name="Web development"
                fill="#fffcfc"
                class="color000000 svgShape"
              >
                <path
                  d="M44 63H20a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2zm9-60H11a1 1 0 0 0-1 1v7h44V4a1 1 0 0 0-1-1zM31 8H14a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2zm6 1a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-39 4v20a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V13zm5.83 13.45a1 1 0 0 1-.28 1.38.94.94 0 0 1-.55.17 1 1 0 0 1-.83-.45l-2-3a1 1 0 0 1 0-1.1l2-3a1 1 0 0 1 1.66 1.1L14.2 24zM21 20.38l-2 7.74a1 1 0 0 1-1 .75 1.07 1.07 0 0 1-.25 0 1 1 0 0 1-.75-1.25l2-7.74a1 1 0 0 1 1.94.5zm4.86 4.17-2 3A1 1 0 0 1 23 28a.94.94 0 0 1-.55-.17 1 1 0 0 1-.28-1.38L23.8 24l-1.63-2.45a1 1 0 1 1 1.66-1.1l2 3a1 1 0 0 1 0 1.1zM52 29a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3z"
                  fill="#fffcfc"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M59 12v27H5V12a4.94 4.94 0 0 1 3-4.56V33a3 3 0 0 0 3 3h42a3 3 0 0 0 3-3V7.44A4.94 4.94 0 0 1 59 12ZM40.89 61H23.11l3.43-10h10.92l3.43 10z"
                  fill="#fffcfc"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M5 41v3a5 5 0 0 0 5 5h44a5 5 0 0 0 5-5v-3zm28 5h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm5.13-16h-5.72L35 27.44a1 1 0 0 1 .81-.3 1 1 0 0 1 .73.45zm10.64 0h-8.24l-1.28-1.93 3-3.64a1 1 0 0 1 .76-.36.85.85 0 0 1 .75.34z"
                  fill="#fffcfc"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M49 18H32a1 1 0 0 0-1 1v9.59L33.56 26a3 3 0 0 1 4.51.33l2.67-3.2A3 3 0 0 1 43 22.07a3 3 0 0 1 2.24 1l4.76 5.3V19a1 1 0 0 0-1-1Zm-13 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                  fill="#fffcfc"
                  class="color000000 svgShape"
                ></path>
              </g>
            </svg>

            <p className="lg:text-white lg:text-sm lg:text-sm lg:mt-2 lg:font-semibold">
              Web Development
            </p>
          </div>
          <div className="content w-full h-96 absolute top-0 left-0 flex justify-center items-center flex-col">
            <div className="px-4 flex flex-col w-full justify-center lg:gap-2 lg:mb-16">
              <p className="text-white text-xxs lg:text-xs">
                Crafting dynamic and responsive web applications that elevate
                your online presence through cutting-edge technology and design.
              </p>
              <ul className="flex flex-col text-xxs px-4 text-white  list-disc mt-2 lg:text-sm">
                <li>Custom Web Application Development</li>
                <li>Website Design and Development</li>
                <li>Web Portal Development</li>
                <li>UI &amp; UX Design</li>
                <li>Ecommerce Development</li>
                <li>CMS Development</li>
              </ul>
              <div className="flex flex-col items-center justify-end w-36 mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="webdevelopment"
                    width="35"
                    height="35"
                  >
                    <g
                      data-name="Web development"
                      fill="#fffcfc"
                      class="color000000 svgShape"
                    >
                      <path
                        d="M44 63H20a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2zm9-60H11a1 1 0 0 0-1 1v7h44V4a1 1 0 0 0-1-1zM31 8H14a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2zm6 1a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-39 4v20a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V13zm5.83 13.45a1 1 0 0 1-.28 1.38.94.94 0 0 1-.55.17 1 1 0 0 1-.83-.45l-2-3a1 1 0 0 1 0-1.1l2-3a1 1 0 0 1 1.66 1.1L14.2 24zM21 20.38l-2 7.74a1 1 0 0 1-1 .75 1.07 1.07 0 0 1-.25 0 1 1 0 0 1-.75-1.25l2-7.74a1 1 0 0 1 1.94.5zm4.86 4.17-2 3A1 1 0 0 1 23 28a.94.94 0 0 1-.55-.17 1 1 0 0 1-.28-1.38L23.8 24l-1.63-2.45a1 1 0 1 1 1.66-1.1l2 3a1 1 0 0 1 0 1.1zM52 29a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3z"
                        fill="#fffcfc"
                        class="color000000 svgShape"
                      ></path>
                      <path
                        d="M59 12v27H5V12a4.94 4.94 0 0 1 3-4.56V33a3 3 0 0 0 3 3h42a3 3 0 0 0 3-3V7.44A4.94 4.94 0 0 1 59 12ZM40.89 61H23.11l3.43-10h10.92l3.43 10z"
                        fill="#fffcfc"
                        class="color000000 svgShape"
                      ></path>
                      <path
                        d="M5 41v3a5 5 0 0 0 5 5h44a5 5 0 0 0 5-5v-3zm28 5h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm5.13-16h-5.72L35 27.44a1 1 0 0 1 .81-.3 1 1 0 0 1 .73.45zm10.64 0h-8.24l-1.28-1.93 3-3.64a1 1 0 0 1 .76-.36.85.85 0 0 1 .75.34z"
                        fill="#fffcfc"
                        class="color000000 svgShape"
                      ></path>
                      <path
                        d="M49 18H32a1 1 0 0 0-1 1v9.59L33.56 26a3 3 0 0 1 4.51.33l2.67-3.2A3 3 0 0 1 43 22.07a3 3 0 0 1 2.24 1l4.76 5.3V19a1 1 0 0 0-1-1Zm-13 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                        fill="#fffcfc"
                        class="color000000 svgShape"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs lg:text-sm mt-2 font-semibold">
                    Web Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-96 opacity-90 "
          />
          <div className="bg-black bg-opacity-50 w-full h-96 absolute top-0 left-0"></div>
          <div className="md:hidden lg:block lg:flex lg:flex-col lg:items-center lg:mt-6 lg:w-40 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 692.672 1010"
              id="Mobile"
              width="35"
              height="35"
            >
              <path
                fill="#ffffff"
                d="M591.976 0H100.695C45.08.157.179 45.057 0 100.695v808.61C.18 964.92 45.08 1009.82 100.695 1010h491.28c55.617-.179 100.539-45.08 100.697-100.695v-808.61C692.514 45.057 647.592.157 591.975 0zM299.014 27.46h94.642c5.873 0 10.648 4.774 10.648 10.67s-4.775 10.693-10.648 10.693h-94.642c-5.873 0-10.648-4.797-10.648-10.693s4.775-10.67 10.648-10.67zm47.32 934.725c-17.417 0-31.562-14.1-31.562-31.518 0-17.44 14.145-31.563 31.563-31.563s31.562 14.123 31.562 31.563c0 17.419-14.144 31.518-31.562 31.518zm273.078-133.49-.134-.203c-.896 14.123-13.002 25.824-27.303 25.87h-491.28c-14.84-.046-27.438-12.598-27.438-27.462V109.84c0-14.861 12.598-27.437 27.438-27.46h491.28c14.863.023 27.438 12.599 27.438 27.46v718.855z"
                class="color545454 svgShape"
              ></path>
              <path
                fill="#ffffff"
                d="M256.804 513.675v256.691c0 9.842-8.07 17.89-17.911 17.89h-83.569c-9.863 0-17.91-8.048-17.91-17.89V513.675c0-9.863 8.047-17.888 17.91-17.888h83.569c9.84 0 17.911 8.025 17.911 17.888zM406.031 424.144v346.222c0 9.842-8.07 17.89-17.91 17.89h-83.57c-9.84 0-17.91-8.048-17.91-17.89V424.144c0-9.841 8.07-17.912 17.91-17.912h83.57c9.84 0 17.91 8.07 17.91 17.912zM555.258 334.59v435.776c0 9.842-8.047 17.89-17.911 17.89h-83.57c-9.863 0-17.909-8.048-17.909-17.89V334.59c0-9.84 8.046-17.888 17.91-17.888h83.569c9.864 0 17.91 8.047 17.91 17.888z"
                class="colordab466 svgShape"
              ></path>
            </svg>
            <p className="lg:text-white lg:text-xs lg:mt-2 lg:font-semibold">
              Mobile App Development
            </p>
          </div>
          <div className="content w-full h-96 absolute top-0 left-0 flex justify-center items-center flex-col">
            <div className="px-4 flex flex-col w-full justify-center lg:gap-2 lg:mb-16">
              <p className="text-white text-xxs lg:text-xs">
                Transforming ideas into intuitive, high-performance mobile
                experiences for seamless user engagement.
              </p>
              <ul className="flex flex-col text-xxs px-4 text-white  list-disc mt-2 lg:text-sm">
                <li>Android App Development</li>
                <li>iOS App Development</li>
                <li>Cross-Platform App Development</li>
                <li>Game App Development</li>
              </ul>
              <div className="flex flex-col items-center justify-end w-36 mt-6 lg:w-40 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 692.672 1010"
                  id="Mobile"
                  width="35"
                  height="35"
                >
                  <path
                    fill="#ffffff"
                    d="M591.976 0H100.695C45.08.157.179 45.057 0 100.695v808.61C.18 964.92 45.08 1009.82 100.695 1010h491.28c55.617-.179 100.539-45.08 100.697-100.695v-808.61C692.514 45.057 647.592.157 591.975 0zM299.014 27.46h94.642c5.873 0 10.648 4.774 10.648 10.67s-4.775 10.693-10.648 10.693h-94.642c-5.873 0-10.648-4.797-10.648-10.693s4.775-10.67 10.648-10.67zm47.32 934.725c-17.417 0-31.562-14.1-31.562-31.518 0-17.44 14.145-31.563 31.563-31.563s31.562 14.123 31.562 31.563c0 17.419-14.144 31.518-31.562 31.518zm273.078-133.49-.134-.203c-.896 14.123-13.002 25.824-27.303 25.87h-491.28c-14.84-.046-27.438-12.598-27.438-27.462V109.84c0-14.861 12.598-27.437 27.438-27.46h491.28c14.863.023 27.438 12.599 27.438 27.46v718.855z"
                    class="color545454 svgShape"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M256.804 513.675v256.691c0 9.842-8.07 17.89-17.911 17.89h-83.569c-9.863 0-17.91-8.048-17.91-17.89V513.675c0-9.863 8.047-17.888 17.91-17.888h83.569c9.84 0 17.911 8.025 17.911 17.888zM406.031 424.144v346.222c0 9.842-8.07 17.89-17.91 17.89h-83.57c-9.84 0-17.91-8.048-17.91-17.89V424.144c0-9.841 8.07-17.912 17.91-17.912h83.57c9.84 0 17.91 8.07 17.91 17.912zM555.258 334.59v435.776c0 9.842-8.047 17.89-17.911 17.89h-83.57c-9.863 0-17.909-8.048-17.909-17.89V334.59c0-9.84 8.046-17.888 17.91-17.888h83.569c9.864 0 17.91 8.047 17.91 17.888z"
                    class="colordab466 svgShape"
                  ></path>
                </svg>
                <p className="text-white text-xs mt-2 font-semibold">
                  Mobile App Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-96 opacity-90 "
          />
          <div className="bg-black bg-opacity-50 w-full h-96 absolute top-0 left-0"></div>
          <div className="md:hidden lg:block lg:flex lg:flex-col lg:items-center lg:w-36 lg:mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23 32"
              id="Strategy"
              width="35"
              height="35"
            >
              <g fill="#ffffff" class="color828282 svgShape">
                <path
                  d="M22 31.5a.5.5 0 0 0-.5-.5h-18a.5.5 0 0 0 0 1h18a.5.5 0 0 0 .5-.5zM1.274 9.354C.856 9.632.222 10.478.823 11.68c.499.997 1.54 2.217 2.647 2.539a1.96 1.96 0 0 0 1.605-.196c1.099-.658 2.397-1.548 2.947-1.93.694.351 1.57.424 2.46.195l.012-.004c-.052 1.651-.611 2.682-3.344 5.22-2.436 2.261-3.881 5.231-3.867 7.946.01 1.781.659 3.31 1.88 4.419A.499.499 0 0 0 5.5 30h14a.5.5 0 0 0 0-1H5.699c-.919-.905-1.407-2.13-1.415-3.555-.013-2.402 1.347-5.165 3.547-7.208C10.746 15.531 11.5 14.249 11.5 12c0-.041-.014-.077-.023-.115.547-.295 1.02-.685 1.343-1.157.405-.59 1.277-2.105.63-3.446a.5.5 0 1 0-.9.436c.291.603.084 1.517-.554 2.445-.368.536-1.026.969-1.761 1.157-.747.191-1.457.107-1.952-.232a.5.5 0 0 0-.571.004c-.018.012-1.777 1.251-3.149 2.074a.967.967 0 0 1-.812.094c-.774-.226-1.625-1.212-2.032-2.026-.329-.658.008-.972.161-1.084 3.447-2.977 5.177-6.07 5.248-6.201a.505.505 0 0 0 .036-.399 19.58 19.58 0 0 1-.54-2.033c1.046.63 2.845 1.51 4.718 1.51 2.604 0 8.658.972 8.658 9.976 0 .049-.009 4.944-1.97 10.327a.5.5 0 1 0 .94.341C20.991 18.123 21.001 13.205 21 13c0-10.183-7.393-10.974-9.658-10.974C8.833 2.026 6.33.123 6.306.103a.507.507 0 0 0-.527-.051A.5.5 0 0 0 5.5.5c0 .981.465 2.568.646 3.147-.418.698-2.066 3.281-4.872 5.707z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M17.485 1.54C15.884.461 14.094 0 11.5 0a.5.5 0 0 0 0 1c2.38 0 4.003.409 5.427 1.369C19.241 3.931 22 7.043 22 13c0 1.451 0 3.438-.985 7.379a.5.5 0 0 0 .97.242C23 16.562 23 14.503 23 13c0-6.396-2.999-9.763-5.515-11.46z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </g>
            </svg>
            <p className="lg:text-white lg:text-xs lg:mt-2 lg:font-semibold">
              Strategy & Consulting
            </p>
          </div>
          <div className="content w-full h-96 absolute top-0 left-0 flex justify-center items-center flex-col">
            <div className="px-4 flex flex-col w-full justify-center lg:gap-2 lg:mb-16">
              <p className="text-white text-xxs lg:text-xs">
                Strategic insights guiding your digital journey, ensuring
                success in the evolving web and app development world.
              </p>
              <ul className="flex flex-col text-xxs px-4 text-white  list-disc mt-2 lg:text-sm">
                <li>Cloud Computing</li>
                <li>CTO Consultancy</li>
                <li>Emerging Technology</li>
                <li>Digital Transformation</li>
                <li>Digital Marketplace</li>
                <li>Data Analytics</li>
                <li>Digital Strategy</li>
              </ul>
              <div className="flex flex-col items-center justify-end w-36 mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 32"
                  id="Strategy"
                  width="35"
                  height="35"
                >
                  <g fill="#ffffff" class="color828282 svgShape">
                    <path
                      d="M22 31.5a.5.5 0 0 0-.5-.5h-18a.5.5 0 0 0 0 1h18a.5.5 0 0 0 .5-.5zM1.274 9.354C.856 9.632.222 10.478.823 11.68c.499.997 1.54 2.217 2.647 2.539a1.96 1.96 0 0 0 1.605-.196c1.099-.658 2.397-1.548 2.947-1.93.694.351 1.57.424 2.46.195l.012-.004c-.052 1.651-.611 2.682-3.344 5.22-2.436 2.261-3.881 5.231-3.867 7.946.01 1.781.659 3.31 1.88 4.419A.499.499 0 0 0 5.5 30h14a.5.5 0 0 0 0-1H5.699c-.919-.905-1.407-2.13-1.415-3.555-.013-2.402 1.347-5.165 3.547-7.208C10.746 15.531 11.5 14.249 11.5 12c0-.041-.014-.077-.023-.115.547-.295 1.02-.685 1.343-1.157.405-.59 1.277-2.105.63-3.446a.5.5 0 1 0-.9.436c.291.603.084 1.517-.554 2.445-.368.536-1.026.969-1.761 1.157-.747.191-1.457.107-1.952-.232a.5.5 0 0 0-.571.004c-.018.012-1.777 1.251-3.149 2.074a.967.967 0 0 1-.812.094c-.774-.226-1.625-1.212-2.032-2.026-.329-.658.008-.972.161-1.084 3.447-2.977 5.177-6.07 5.248-6.201a.505.505 0 0 0 .036-.399 19.58 19.58 0 0 1-.54-2.033c1.046.63 2.845 1.51 4.718 1.51 2.604 0 8.658.972 8.658 9.976 0 .049-.009 4.944-1.97 10.327a.5.5 0 1 0 .94.341C20.991 18.123 21.001 13.205 21 13c0-10.183-7.393-10.974-9.658-10.974C8.833 2.026 6.33.123 6.306.103a.507.507 0 0 0-.527-.051A.5.5 0 0 0 5.5.5c0 .981.465 2.568.646 3.147-.418.698-2.066 3.281-4.872 5.707z"
                      fill="#ffffff"
                      class="color000000 svgShape"
                    ></path>
                    <path
                      d="M17.485 1.54C15.884.461 14.094 0 11.5 0a.5.5 0 0 0 0 1c2.38 0 4.003.409 5.427 1.369C19.241 3.931 22 7.043 22 13c0 1.451 0 3.438-.985 7.379a.5.5 0 0 0 .97.242C23 16.562 23 14.503 23 13c0-6.396-2.999-9.763-5.515-11.46z"
                      fill="#ffffff"
                      class="color000000 svgShape"
                    ></path>
                  </g>
                </svg>
                <p className="text-white text-xs mt-2 font-semibold">
                  Strategy & Consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/3415148/pexels-photo-3415148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-96 opacity-90 "
          />
          <div className="bg-black bg-opacity-50 w-full h-96 absolute top-0 left-0"></div>
          <div className="md:hidden lg:block lg:flex lg:flex-col lg:items-center lg:w-36 lg:mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 66 66"
              viewBox="0 0 66 66"
              id="StaffTurnover"
              width="35"
              height="35"
            >
              <path
                d="M62.1 55l-6.1-1.9v-2.2c3-2.7 4.9-7.6 4.9-11.2 0-5.2-4.2-9.5-9.5-9.5s-9.5 4.3-9.5 9.5c0 3.6 1.9 8.5 4.9 11.2v2.2L40.9 55c-1.7.5-2.9 2.1-2.9 3.9V64c0 .5.4 1 1 1h25c.5 0 1-.4 1-1v-5.1C65 57.1 63.8 55.5 62.1 55zM54.1 53.8c0 1.6-5.2 1.6-5.2 0v-1.6c1.8.9 3.5.8 5.2 0V53.8zM45.6 45.6c.9-1.2 1.5-3.5 1.6-5.8 1.5.9 3.2 1.3 5 1.3 1.6-.1 3-.5 4.2-1.3.2 1.4.6 3.2 1.6 4.1.1.1.2.1.3.2C55.2 51.9 49.5 53.7 45.6 45.6zM25.1 25.7L19 23.8v-2.2c3-2.7 4.9-7.6 4.9-11.2 0-5.2-4.2-9.5-9.5-9.5C9.3 1 5 5.3 5 10.5c0 3.6 1.9 8.5 4.9 11.2v2.2l-6.1 1.9C2.2 26.2 1 27.8 1 29.6v5.2c0 .5.4 1 1 1h25c.5 0 1-.4 1-1v-5.2C27.9 27.8 26.8 26.2 25.1 25.7zM17.1 24.5c0 1.6-5.2 1.6-5.2 0v-1.6c1.7.8 3.4.9 5.2 0V24.5zM8.5 16.3c.9-1.2 1.5-3.5 1.6-5.8 1.5.9 3.2 1.3 5 1.3 1.6-.1 3-.5 4.2-1.3.2 1.4.6 3.2 1.6 4.1.1.1.2.1.3.2C18.1 22.8 12.4 24.4 8.5 16.3zM26.5 49.5l-2.7-.8c-.2-.5-.3-.9-.6-1.4l1.4-2.5c.2-.4.1-.9-.2-1.2l-2.1-2.1c-.3-.3-.8-.4-1.2-.2l-2.5 1.4c-.4-.2-.9-.4-1.4-.6l-.8-2.7c-.1-.4-.5-.7-.9-.7h-3c-.4 0-.8.3-.9.7l-.8 2.7c-.5.2-.9.3-1.4.6l-2.5-1.4c-.4-.2-.9-.1-1.2.2l-2.1 2.1c-.3.3-.4.8-.2 1.2L5 47.3c-.2.4-.4.9-.6 1.4l-2.7.8C1.3 49.6 1 50 1 50.4v3c0 .4.3.8.7.9l2.7.8C4.6 55.6 4.8 56 5 56.5l-1.4 2.5c-.2.4-.1.8.2 1.2l2.1 2.1c.3.3.8.4 1.2.2L9.5 61c.4.2.9.4 1.4.6l.8 2.7c.1.4.5.7.9.7h3c.4 0 .8-.3.9-.7l.8-2.7c.5-.2.9-.3 1.4-.6l2.5 1.4c.4.2.8.1 1.2-.2l2.1-2.1c.3-.3.4-.8.2-1.2l-1.4-2.5c.2-.4.4-.9.6-1.3l2.7-.8c.4-.1.7-.5.7-.9v-3C27.2 50 26.9 49.6 26.5 49.5zM14.1 56.8c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9C19 54.6 16.8 56.8 14.1 56.8zM64.3 11.7l-2.7-.8c-.2-.5-.3-.9-.6-1.3l1.4-2.5c.2-.4.1-.9-.2-1.2l-2.1-2.1c-.3-.3-.8-.4-1.2-.2L56.5 5c-.4-.2-.9-.4-1.4-.6l-.8-2.7C54.2 1.3 53.8 1 53.4 1h-3c-.4 0-.8.3-.9.7l-.8 2.7c-.5.2-.9.3-1.3.6l-2.5-1.4c-.4-.2-.8-.1-1.2.2l-2.1 2.1c-.3.3-.4.8-.2 1.2l1.4 2.5c-.2.4-.4.9-.6 1.3l-2.7.8c-.4.1-.7.5-.7.9v3c0 .4.3.8.7.9l2.7.8c.2.5.3.9.6 1.3l-1.4 2.5c-.2.4-.1.9.2 1.2l2.1 2.1c.3.3.8.4 1.2.2l2.5-1.4c.4.2.9.4 1.3.6l.8 2.7c.1.4.5.7.9.7h3c.4 0 .8-.3.9-.7l.8-2.7c.5-.2.9-.3 1.4-.6l2.5 1.4c.4.2.9.1 1.2-.2l2.1-2.1c.3-.3.4-.8.2-1.2L61 18.7c.2-.4.4-.9.6-1.3l2.7-.8c.4-.1.7-.5.7-.9v-3C65 12.2 64.7 11.8 64.3 11.7zM51.9 19c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.7 0 4.9 2.2 4.9 4.9S54.6 19 51.9 19z"
                fill="#ffffff"
                class="color000000 svgShape"
              ></path>
              <g fill="#ffffff" class="color000000 svgShape">
                <path
                  d="M36.3,57.6c-0.1,0.4-0.1,0.9-0.1,1.3v0.8c-2.4-1.1-4.1-3.5-4.1-6.4v-16c0-1.7-0.9-3.2-2.2-4.2v-2.2
				c2.4,1.1,4.1,3.5,4.1,6.4v16C34,55.1,34.9,56.7,36.3,57.6z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </g>
            </svg>
            <p className="md:hidden lg:block lg:text-white lg:text-xs lg:mt-2 lg:font-semibold">
              IT Staff Augmentation
            </p>
          </div>
          <div className="content w-full h-96 absolute top-0 left-0 flex justify-center items-center flex-col">
            <div className="px-4 flex flex-col w-full justify-center lg:gap-2 lg:mb-16">
              <p className="text-white text-xxs lg:text-xs">
                Boosting project efficiency with skilled professionals
                seamlessly integrated into your team. We have hiring models for
              </p>
              <ul className="flex flex-col text-xxs px-4 text-white text-sm list-disc my-2">
                <li>Dedicated Teams</li>
                <li>Individual Resources</li>
                <li>Project Outsourcing</li>
              </ul>
              <div className="flex flex-col items-center justify-end w-36 mt-6 lg:justify-start lg:absolute lg:left-2 lg:bottom-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 66 66"
                  viewBox="0 0 66 66"
                  id="StaffTurnover"
                  width="35"
                  height="35"
                >
                  <path
                    d="M62.1 55l-6.1-1.9v-2.2c3-2.7 4.9-7.6 4.9-11.2 0-5.2-4.2-9.5-9.5-9.5s-9.5 4.3-9.5 9.5c0 3.6 1.9 8.5 4.9 11.2v2.2L40.9 55c-1.7.5-2.9 2.1-2.9 3.9V64c0 .5.4 1 1 1h25c.5 0 1-.4 1-1v-5.1C65 57.1 63.8 55.5 62.1 55zM54.1 53.8c0 1.6-5.2 1.6-5.2 0v-1.6c1.8.9 3.5.8 5.2 0V53.8zM45.6 45.6c.9-1.2 1.5-3.5 1.6-5.8 1.5.9 3.2 1.3 5 1.3 1.6-.1 3-.5 4.2-1.3.2 1.4.6 3.2 1.6 4.1.1.1.2.1.3.2C55.2 51.9 49.5 53.7 45.6 45.6zM25.1 25.7L19 23.8v-2.2c3-2.7 4.9-7.6 4.9-11.2 0-5.2-4.2-9.5-9.5-9.5C9.3 1 5 5.3 5 10.5c0 3.6 1.9 8.5 4.9 11.2v2.2l-6.1 1.9C2.2 26.2 1 27.8 1 29.6v5.2c0 .5.4 1 1 1h25c.5 0 1-.4 1-1v-5.2C27.9 27.8 26.8 26.2 25.1 25.7zM17.1 24.5c0 1.6-5.2 1.6-5.2 0v-1.6c1.7.8 3.4.9 5.2 0V24.5zM8.5 16.3c.9-1.2 1.5-3.5 1.6-5.8 1.5.9 3.2 1.3 5 1.3 1.6-.1 3-.5 4.2-1.3.2 1.4.6 3.2 1.6 4.1.1.1.2.1.3.2C18.1 22.8 12.4 24.4 8.5 16.3zM26.5 49.5l-2.7-.8c-.2-.5-.3-.9-.6-1.4l1.4-2.5c.2-.4.1-.9-.2-1.2l-2.1-2.1c-.3-.3-.8-.4-1.2-.2l-2.5 1.4c-.4-.2-.9-.4-1.4-.6l-.8-2.7c-.1-.4-.5-.7-.9-.7h-3c-.4 0-.8.3-.9.7l-.8 2.7c-.5.2-.9.3-1.4.6l-2.5-1.4c-.4-.2-.9-.1-1.2.2l-2.1 2.1c-.3.3-.4.8-.2 1.2L5 47.3c-.2.4-.4.9-.6 1.4l-2.7.8C1.3 49.6 1 50 1 50.4v3c0 .4.3.8.7.9l2.7.8C4.6 55.6 4.8 56 5 56.5l-1.4 2.5c-.2.4-.1.8.2 1.2l2.1 2.1c.3.3.8.4 1.2.2L9.5 61c.4.2.9.4 1.4.6l.8 2.7c.1.4.5.7.9.7h3c.4 0 .8-.3.9-.7l.8-2.7c.5-.2.9-.3 1.4-.6l2.5 1.4c.4.2.8.1 1.2-.2l2.1-2.1c.3-.3.4-.8.2-1.2l-1.4-2.5c.2-.4.4-.9.6-1.3l2.7-.8c.4-.1.7-.5.7-.9v-3C27.2 50 26.9 49.6 26.5 49.5zM14.1 56.8c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9C19 54.6 16.8 56.8 14.1 56.8zM64.3 11.7l-2.7-.8c-.2-.5-.3-.9-.6-1.3l1.4-2.5c.2-.4.1-.9-.2-1.2l-2.1-2.1c-.3-.3-.8-.4-1.2-.2L56.5 5c-.4-.2-.9-.4-1.4-.6l-.8-2.7C54.2 1.3 53.8 1 53.4 1h-3c-.4 0-.8.3-.9.7l-.8 2.7c-.5.2-.9.3-1.3.6l-2.5-1.4c-.4-.2-.8-.1-1.2.2l-2.1 2.1c-.3.3-.4.8-.2 1.2l1.4 2.5c-.2.4-.4.9-.6 1.3l-2.7.8c-.4.1-.7.5-.7.9v3c0 .4.3.8.7.9l2.7.8c.2.5.3.9.6 1.3l-1.4 2.5c-.2.4-.1.9.2 1.2l2.1 2.1c.3.3.8.4 1.2.2l2.5-1.4c.4.2.9.4 1.3.6l.8 2.7c.1.4.5.7.9.7h3c.4 0 .8-.3.9-.7l.8-2.7c.5-.2.9-.3 1.4-.6l2.5 1.4c.4.2.9.1 1.2-.2l2.1-2.1c.3-.3.4-.8.2-1.2L61 18.7c.2-.4.4-.9.6-1.3l2.7-.8c.4-.1.7-.5.7-.9v-3C65 12.2 64.7 11.8 64.3 11.7zM51.9 19c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c2.7 0 4.9 2.2 4.9 4.9S54.6 19 51.9 19z"
                    fill="#ffffff"
                    class="color000000 svgShape"
                  ></path>
                  <g fill="#ffffff" class="color000000 svgShape">
                    <path
                      d="M36.3,57.6c-0.1,0.4-0.1,0.9-0.1,1.3v0.8c-2.4-1.1-4.1-3.5-4.1-6.4v-16c0-1.7-0.9-3.2-2.2-4.2v-2.2
				c2.4,1.1,4.1,3.5,4.1,6.4v16C34,55.1,34.9,56.7,36.3,57.6z"
                      fill="#ffffff"
                      class="color000000 svgShape"
                    ></path>
                  </g>
                </svg>
                <p className="text-white text-xs mt-2 font-semibold">
                  IT Staff Augmentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDesktop;
