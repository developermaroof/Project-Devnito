import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Awards = ({ deviceType, children }) => {
  return (
    <div>
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
            <div className="bg-gray-100 h-full p-10 m-4 flex justify-center items-center rounded-3xl ">
              {child}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Awards;
