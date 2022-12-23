import React, { useState } from "react";

import Header from "../../common/Header";
import Footer from "../../common/Footer";

import ServicesPage from "../ServicesPage/ServicesPage";
import AboutPage from "../AboutPage/AboutPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import VideoPage from "../VideoPage/VideoPage";
import ContactPage from "../ContactPage/ContactPage";
import Reviews from "./Reviews";

import { Button } from "react-bootstrap";

const HomePage = () => {
  const [aboutDiv, setAboutScrollDiv] = useState();
  const [contactDiv, setContactScrollDiv] = useState();
  const [servicesDiv, setServicesScrollDiv] = useState();
  const [galleryDiv, setGalleryScrollDiv] = useState();
  const [videoDiv, setVideoScrollDiv] = useState();

  const aboutData = (data) => {
    setAboutScrollDiv(data);
  };

  const servicesData = (data) => {
    setServicesScrollDiv(data);
  };

  const galleryData = (data) => {
    setGalleryScrollDiv(data);
  };

  const videoData = (data) => {
    setVideoScrollDiv(data);
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
        videoRef={videoDiv}
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
                    background: "skyblue",
                    opacity: "0.8",
                    borderRadius: "5px",
                    height: "400px",
                  }}
                >
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2
                      style={{
                        color: "red",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Full Service
                    </h2>
                    <h3
                      style={{
                        color: "#F03191",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Maxxed Out Styling
                    </h3>
                    <p
                      className="py-3"
                      style={{
                        color: "#F03191",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      We provide professional services ranging from hair
                      styling, coloring, nail care, texturing and waxing.
                    </p>
                    <Button
                      href="#services"
                      size="lg"
                      style={{ background: "#F03191", border: "none" }}
                      onClick={() => servicesClick(servicesDiv)}
                    >
                      What we offer »
                    </Button>
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
      <VideoPage videoNode={videoData} />
      <Reviews />
      <ContactPage contactNode={contactData} />
      <Footer />
    </div>
  );
};

export default HomePage;
