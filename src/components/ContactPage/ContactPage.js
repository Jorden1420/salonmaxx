import React, { useEffect, useRef } from "react";

import SectionHeader from "../../common/SectionHeader";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";

const ContactPage = (props) => {
  const contactRef = useRef();

  useEffect(() => {
    props.contactNode(contactRef);
  }, []);

  return (
    <div className="contact-page-container" ref={contactRef}>
      <SectionHeader header={"Get in Contact"} />
      <div className="fluid-container">
        <div
          className="contact-container"
          style={{ backgroundColor: "#9BCE1A" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 m-3">
                <div className="background-change p-3">
                  <h3 style={{ color: "blue" }}>Contact Information</h3>
                  <p className="pt-2 text-white">
                    Have a question? Feel free to contact us anytime and we'll
                    be happy to assist you.
                  </p>
                  <div className="contact-info-container mt-3">
                    <div className="contact-info">
                      <a href="tel:9167250423">
                        <span>
                          <PhoneIcon style={{ color: "white" }} />{" "}
                          <span style={{ color: "#fff" }}>(916) 725-0423</span>
                        </span>
                      </a>
                    </div>
                    {/* <div className="contact-info">
                      <a href="mailto:test@test.com">
                        <span>
                          <EmailIcon style={{ color: "white" }} />{" "}
                          <span style={{ color: "#fff" }}>test@test.com</span>
                        </span>
                      </a>
                    </div> */}
                    <div className="contact-info">
                      <a
                        href="https://www.google.com/maps/dir//38.7084598,-121.3144024/@38.6448267,-121.4406072,12z"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <MapIcon style={{ color: "white" }} />{" "}
                          <span style={{ color: "#fff" }}>
                            7821 Lichen Dr Citrus Heights, CA 95621
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 m-3">
                <div className="background-change p-3">
                  <h3 style={{ color: "blue" }}>Business Hours</h3>
                  <p className="pt-2 text-white">Monday - Friday 9AM - 7PM</p>
                  <p className="pt-2 text-white">Closed Monday and Sunday</p>
                  <div className="social-media-container pt-3">
                    <h3 style={{ color: "blue" }}>Social Media</h3>{" "}
                    <div className="contact-social-media">
                      <a
                        href="https://www.facebook.com/SalonMaxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Salon Maxx Facebook Page"
                        className="d-inline-block p-3"
                      >
                        <i className="fab fa-facebook fa-3x" />
                      </a>
                      <a
                        href="https://www.yelp.com/biz/salon-maxx-citrus-heights-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Salon Maxx Yelp"
                        className="d-inline-block p-3"
                      >
                        <i className="fab fa-yelp fa-3x" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 m-3 d-flex align-items-center">
                <div className="map-container m-3">
                  <img src="/images/map-image.jpg" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
