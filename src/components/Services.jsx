import React from "react";
import ServicesMobile from "../miniComponents/ServicesMobile";
import ServicesDesktop from "../miniComponents/ServicesDesktop";

const Services = () => {
  return (
    <div>
      <div className="md:hidden">
        <ServicesMobile />
      </div>
      <div className="hidden md:block">
        <ServicesDesktop />
      </div>
    </div>
  );
};

export default Services;
