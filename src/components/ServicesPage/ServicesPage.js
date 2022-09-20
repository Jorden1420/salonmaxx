import React, { useEffect, useRef } from "react";

import SectionHeader from "../../common/SectionHeader";

const ServicesPage = (props) => {
  const servicesRef = useRef();

  useEffect(() => {
    props.servicesNode(servicesRef);
  }, []);

  return (
    <div className="services-container" ref={servicesRef}>
      <SectionHeader header={"Maxx Services"} />
      <div className="services-container">
        <div className="row justify-content-center">
          <div className="col-lg-3 shadow-sm p-4 m-2">
            <h3>Hair Coloring</h3>
            <p>
              Considering a completely new style is one thing but how else can
              you add zing to your locks?
            </p>
          </div>
          <div className="col-lg-3 shadow-sm p-4 m-2">
            <h3>Hair Styling</h3>
            <p>
              Salon Maxx is always up to date on the latest and greatest. Your
              satisfaction is important to us.
            </p>
          </div>
          <div className="col-lg-3 shadow-sm p-4 m-2">
            <h3>Nail Care</h3>
            <p>
              We aim to deliver premier service in an intimate, relaxed setting.
              Our friendly staff are here to assist you.
            </p>
          </div>
          <div className="col-lg-3 shadow-sm p-4 m-2">
            <h3>Microblading</h3>
            <p>
              We microblading services for customers that want the perfect
              brows. Have a specific request? Ask us anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
