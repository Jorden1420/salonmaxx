import React, { useEffect, useRef } from "react";

import SectionHeader from "../../common/SectionHeader";

const AboutPage = (props) => {
  const aboutRef = useRef();

  useEffect(() => {
    props.aboutNode(aboutRef);
  }, []);

  return (
    <div className="about-page-container" ref={aboutRef}>
      <SectionHeader header={"About Us"} />
      <div className="fluid-container">
        <div
          className="about-container p-3 d-flex justify-content-center"
          style={{ background: "#9BCE1A" }}
        >
          <div className="about-info w-75 text-white">
            <p className="py-2">
              Salon Maxx is located at 7821 Lichen Dr in Citrus Heights, CA -
              Sacramento County and is a business listed in the categories
              Beauty Salons and Beauty Shops. After you do business with Salon
              Maxx, please leave a review to help other people and improve
              hubbiz. Also, don't forget to mention Hubbiz to Salon Maxx.
            </p>
            <p className="py-2">
              A beautiful and family friendly full service salon located in
              Citrus Heights, CA. We offer many services and walk-ins and
              appointments are welcome!
            </p>
            <p className="py-2">
              A friendly, professional salon providing quality service. With
              over 20 years of experience and expertise! We offer a full range
              of services varying from nails to hair to massage therapy. Come by
              and visit to book an appointment or call in! Walk-in clients are
              welcome!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
