"use client";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const ToggleButton = styled.button`
  font-size: 1rem;
  color: #02040e;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Card = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 52;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  transition: display 0.3s ease-in-out;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px;
  gap: 15px;
`;

const MLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  &:hover {
    color: #555;
  }
`;

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer className="mHeader">
      <Container className="mHeaderContainer">
      <a href="/">
        <Logo>
          {/* <Image src="/NewSvgs/Logos/Beacon.svg" width={120} height={30} alt="ImageHeader" /> */}
          <Image src="/NewSvgs/Logos/Beacon11.svg" width={120} height={30} alt="ImageHeader" />
          
        </Logo>
        </a>
        <ToggleButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="#02040E"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </ToggleButton>
        <Card $isMenuOpen={isMenuOpen} style={{ display: isMenuOpen ? "flex" : "none" }}>
          <MLink href="/" className="mLinks">Home</MLink>
          {/* <MLink href="/" className="mLinks">Our Presence</MLink> */}
          <MLink href="/pages/About" className="mLinks">About Us</MLink>
          <MLink href="/pages/Services" className="mLinks">Services</MLink>
          {/* <MLink href="/" className="mLinks">Blogs</MLink> */}
          <MLink href="/pages/Contact" className="mLinks">Contact Us</MLink>
          <div style={{backgroundColor:"#11215B"}} className="hButtonContainer headerContactButton mHeaderBtn">
            <a href="tel:971 800 4392" className="btn mBtn">
              <Image
                src="/telephone.svg"
                width={15}
                height={15}
                alt="heroContact"
              />
              +971 800 4392
            </a>
          </div>
        </Card>
      </Container>
    </HeaderContainer>
  );
}

export default MobileHeader;
