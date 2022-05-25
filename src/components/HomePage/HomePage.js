import React, { useState } from "react";

import Header from "../../common/Header";
import Footer from "../../common/Footer";

import ServicesPage from "../ServicesPage/ServicesPage";
import AboutPage from "../AboutPage/AboutPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import ContactPage from "../ContactPage/ContactPage";

const HomePage = () => {
  const [aboutDiv, setAboutScrollDiv] = useState();
  const [contactDiv, setContactScrollDiv] = useState();
  const [servicesDiv, setServicesScrollDiv] = useState();
  const [galleryDiv, setGalleryScrollDiv] = useState();

  const aboutData = (data) => {
    setAboutScrollDiv(data);
  };

  const servicesData = (data) => {
    setServicesScrollDiv(data);
  };

  const galleryData = (data) => {
    setGalleryScrollDiv(data);
  };

  const contactData = (data) => {
    setContactScrollDiv(data);
  };

  const servicesClick = (data) => {
    data.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Header
        aboutRef={aboutDiv}
        servicesRef={servicesDiv}
        galleryRef={galleryDiv}
        contactRef={contactDiv}
      />
      <div className="homepage-container">
        <div className="landing-page-image">
          <section className="bgimage">
            <div className="container-fluid">
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ height: "50vh" }}
              >
                <div
                  className="landing-container w-75 p-4 mt-4"
                  style={{
                    background: "black",
                    opacity: "0.8",
                    borderRadius: "5px",
                  }}
                >
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 style={{ color: "white", textTransform: "uppercase" }}>
                      Full Service
                    </h2>
                    <h3
                      style={{ color: "#DB0159", textTransform: "uppercase" }}
                    >
                      Maxxed Out Styling
                    </h3>
                    <p className="py-3 text-white">
                      We provide professional services ranging from hair
                      styling, coloring, nail care, texturing and waxing.
                    </p>
                    <p>
                      <a
                        href="#services"
                        className="btn btn-primary btn-large"
                        style={{ background: "#DB0159", border: "none" }}
                        onClick={() => servicesClick(servicesDiv)}
                      >
                        What we offer »
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ServicesPage servicesNode={servicesData} />
      <AboutPage aboutNode={aboutData} />
      <GalleryPage galleryNode={galleryData} />
      <ContactPage contactNode={contactData} />
      <Footer />
    </div>
  );
};

export default HomePage;
