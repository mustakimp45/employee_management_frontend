import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
//import LogoImg from "../assets/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer
      extendNavbar={extendNavbar}
      className="shadow bgclr text-white"
    >
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/" className="btn btn-outline-light btn-sm">
              Home
            </NavbarLink>
            <NavbarLink to="/AddUser" className="btn btn-outline-light btn-sm">
              AddUser
            </NavbarLink>
            {/* <NavbarLink to="/contact"> Contact Us</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink> */}
            <NavbarLink
              to="/ViewEmp"
              className="btn btn-outline-light shadow-lg  rounded shadow btn-sm"
            >
              ViewEmp
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>{/* <Logo src={LogoImg}></Logo> */}</RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/AddUser"> Add User</NavbarLinkExtended>
          {/* <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
