import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props) => {
  const aboutClick = () => {
    props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const servicesClick = () => {
    props.servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const galleryClick = () => {
    props.galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videoClick = () => {
    props.videoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactClick = () => {
    props.contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand
              href="/"
              style={{
                color: "#fff",
                fontFamily: "Pacifico",
                fontSize: "24px",
              }}
            >
              Salon Maxx
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#" onClick={servicesClick}>
                  Services
                </Nav.Link>
                <Nav.Link href="#" onClick={galleryClick}>
                  Gallery
                </Nav.Link>
                <Nav.Link href="#" onClick={videoClick}>
                  Videos
                </Nav.Link>
                <Nav.Link href="#" onClick={aboutClick}>
                  About
                </Nav.Link>
                <Nav.Link href="#" onClick={contactClick}>
                  Contact
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link
                  href="https://www.facebook.com/SalonMaxx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-2x" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.yelp.com/biz/salon-maxx-citrus-heights-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-yelp fa-2x" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
