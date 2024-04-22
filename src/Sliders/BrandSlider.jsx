import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const Brands = ({ deviceType, children }) => {
  return (
    <div className="bg-black">
      <h2 className=" text-center text-2xl font-bold mb-0 pt-8 text-gray-400">
        Featured By:
      </h2>
      <Carousel
        swipeable={true}
        partialVisible={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        arrows={false} // Hide arrows
        renderButtonGroupOutside={false} // Hide buttons
      >
        {React.Children.map(children, (child, index) => (
          <div className="w-full" key={index}>
            <div className=" h-28 p-4 flex justify-center items-center rounded-md">
              {child}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
