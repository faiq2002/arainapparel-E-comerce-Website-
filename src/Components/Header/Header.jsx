import React, { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { CartContext } from "../../Context/Cart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export default function Header({ category, name }) {
  let searchState = useContext(CartContext);
  let [secondState, setSecondState] = useState(searchState.submitSearch);
  searchState.setSubmitSearch(secondState);
  let navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate("/SearchResult");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary   justify-content-around ">
      <Container className="mx-0  ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="none">
              <Nav.Link
                href="#home"
                className={`navlink small ${name === "home" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
            </Link>
            <Link to={"/About"} className="none">
              <Nav.Link
                href="#link"
                className={`navlink small ${name === "about" ? "active" : ""}`}
              >
                About Us
              </Nav.Link>
            </Link>
            <NavDropdown
              title="Men"
              className={`navlink ${category==="Men"?"fw-bold text-dark":"text-secondary"}  `}
              id="basic-nav-dropdown"
            >
              <Link to={"/Men/Hoodie"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Hoodie") ? "active" : ""
                  }`}
                  href="#action/3.1"
                >
                  Hoodie
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/T-Shirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "T-Shirt") ? "active" : ""
                  }`}
                  href="#action/3.2 "
                >
                  T-Shirt
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Sweatshirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Sweatshirt")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.3"
                >
                  Sweatshirts
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Singlet"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Singlet") ? "active" : ""
                  }`}
                  href="#action/3.3"
                >
                  Singlet
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Polo-Shirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Polo-Shirt")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.4"
                >
                  Polo-Shirt
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Jogger-Pant"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Jogger-Pant")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.5"
                >
                  Jogger-Pant
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Shorts"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Shorts") ? "active" : ""
                  }`}
                  href="#action/3.6"
                >
                  Shorts
                </NavDropdown.Item>
              </Link>

              <Link to={"/Men/Tracksuit"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Men") & (name === "Tracksuit")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.7"
                >
                  TrackSuit
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown
              title="Women"
              className={`navlink ${category==="Women"?"fw-bold text-dark":"text-secondary"}  `}
              id="basic-nav-dropdown"
            >
              <Link to={"/Women/Hoodie"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Hoodie") ? "active" : ""
                  }`}
                  href="#action/3.1"
                >
                  Hoodies
                </NavDropdown.Item>
              </Link>

              <Link to={"/Women/Sweatshirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Sweatshirt")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.2"
                >
                  Sweatshirts
                </NavDropdown.Item>
              </Link>
              <Link to={"/Women/Polo-Shirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Polo-Shirt")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.3"
                >
                  Polo-Shirt
                </NavDropdown.Item>
              </Link>

              <Link to={"/Women/T-Shirt"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "T-Shirt")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.4"
                >
                  T-shirts
                </NavDropdown.Item>
              </Link>
              <Link to={"/Women/Crop-Top"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Crop-Top")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.6"
                >
                  Crop-Top
                </NavDropdown.Item>
              </Link>
              <Link to={"/Women/Legging"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Legging")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.7"
                >
                  Leggging
                </NavDropdown.Item>
              </Link>
             
              <Link to={"/Women/Shorts"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Shorts") ? "active" : ""
                  }`}
                  href="#action/3.9"
                >
                  Shorts
                </NavDropdown.Item>
              </Link>
              <Link to={"/Women/Tracksuit"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Women") & (name === "Tracksuit")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.10"
                >
                  Tracksuit
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown
              title="Sports wear"
              className={`navlink ${category==="Sports-Wear"?"fw-bold text-dark":"text-secondary"}  `}
              id="basic-nav-dropdown"
            >
              <Link to={"/Sports-Wear/Soccer-Uniform"} className="none">
                <NavDropdown.Item className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Soccer-Uniform")
                      ? "active"
                      : ""
                  }`} href="#action/3.1">
                  Soccer Uniform
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Basketball-Uniform"} className="none">
                <NavDropdown.Item 
                className={`navlink small ${
                  (category === "Sports-Wear") & (name === "Basketball-Uniform")
                    ? "active"
                    : ""
                }`}
                href="#action/3.3">
                  Basketball Uniform
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Tennis-Uniform"} className="none">
                <NavDropdown.Item className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Tennis-Uniform")
                      ? "active"
                      : ""
                  }`} href="#action/3.4">
                  Tennis Uniform
                </NavDropdown.Item>
              </Link>
              <Link to={"/Sports-Wear/Ice-Hockey-Uniform"} className="none">
                <NavDropdown.Item 
                className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Baseball-Uniform")
                      ? "active"
                      : ""
                  }`}
                
                href="#action/3.5">
                  Ice Hockey Uniforms
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Baseball-Uniform"} className="none">
                <NavDropdown.Item className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Baseball-Uniform")
                      ? "active"
                      : ""
                  }`}href="#action/3.6">
                  Baseball Uniform
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Rugby-Uniform"} className="none">
                <NavDropdown.Item className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Rugby-Uniform")
                      ? "active"
                      : ""
                  }`} href="#action/3.8">
                  Rugby Uniforms
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Cricket-Uniform"} className="none">
                <NavDropdown.Item className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Cricket-Uniform")
                      ? "active"
                      : ""
                  }`}href="#action/3.9">
                  Cricket Uniforms
                </NavDropdown.Item>
              </Link>

              <Link to={"/Sports-Wear/Vollyball-Uniform"} className="none">
                <NavDropdown.Item
                  className={`navlink small ${
                    (category === "Sports-Wear") & (name === "Vollyball-Uniform")
                      ? "active"
                      : ""
                  }`}
                  href="#action/3.10"
                >
                  Vollyball Uniforms
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown
              title="Jackets"
              className={`navlink ${category==="Jackets"?"fw-bold text-dark":"text-secondary"}  `}
              id="basic-nav-dropdown"
            >

                <Link to={"/Jackets/Varisty-Jacket"} className="none">
              <NavDropdown.Item 
              className={`navlink small ${
                (category === "Jackets") & (name === "Varisty-Jacket")
                  ? "active"
                  : ""
              }`}
              href="#action/3.1">
                Varisty Jacket
              </NavDropdown.Item>
              </Link>

              <Link to={"/Jackets/Bomber-Jacket"} className="none">
              <NavDropdown.Item className={`navlink small ${
                (category === "Jackets") & (name === "Bomber-Jacket")
                  ? "active"
                  : ""
              }`} href="#action/3.2">
                Bomber Jacket
              </NavDropdown.Item>
              </Link>

              <Link to={"/Jackets/Puffer-Jacket"} className="none">
              <NavDropdown.Item className={`navlink small ${
                (category === "Jackets") & (name === "Puffer-Jacket")
                  ? "active"
                  : ""
              }`} href="#action/3.3">
                Puffer Jacket
              </NavDropdown.Item>
              </Link>
              
              <Link to={"/Jackets/Denim-Jacket"} className="none">
              <NavDropdown.Item className={`navlink small ${
                (category === "Jackets") & (name === "Denim-Jacket")
                  ? "active"
                  : ""
              }`} href="#action/3.4">
                Denim Jacket
              </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link to={"/OnlineInquiry"} className="none">
              <Nav.Link
                href="#link"
                className={`navlink small ${
                  name === "inquiry" ? "active" : ""
                }`}
              >
                Online Inquiry
              </Nav.Link>
            </Link>

            <Link to={"/Contact"} className="none">
              <Nav.Link
                href="#link"
                className={`navlink small ${
                  name === "contact" ? "active" : ""
                }`}
              >
                Contact Us
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Form
          inline
          onChange={(e) => setSecondState(e.target.value.toLowerCase())}
          onSubmit={(e) => handleSearch(e)}
        >
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search products by name..."
              className=" mr-sm-2 outline"
              value={secondState}
            />
          </Col>
        </Form>
      </Container>
    </Navbar>
  );
}
