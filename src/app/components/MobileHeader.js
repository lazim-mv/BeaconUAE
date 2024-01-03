import Image from "next/image";
import React, { useState } from "react";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cardStyles = {
    position: "fixed",
    top: "3.5rem",
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff",
    zIndex: 52,
    display: isMenuOpen ? "flex" : "none",
    transition: "display 0.3s ease-in-out",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "24px",
    gap: "15px",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
  };

  return (
    <div className="mHeader">
      <div className="fixedmHeadContainer">
        <div className="mHeaderContainer" style={{ width: "100%", margin: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/">
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333" }}>
              <Image src="/NewSvgs/Logos/Beacon11.svg" width={120} height={30} alt="ImageHeader" />
            </div>
          </a>
          <button
            aria-label="HamBurgerMenu"
            onClick={toggleMenu}
            style={{
              fontSize: "1rem",
              color: "#02040E",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="#02040E" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="#02040E" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
          <div
            style={cardStyles}
          >
            <a href="/" style={linkStyles} className="mLinks">
              Home
            </a>
            <a href="/pages/About" style={linkStyles} className="mLinks">
              About Us
            </a>
            <a href="/pages/Services" style={linkStyles} className="mLinks">
              Services
            </a>
            <a href="/pages/Contact" style={linkStyles} className="mLinks">
              Contact Us
            </a>
            <div style={{ backgroundColor: "#11215B" }} className="hButtonContainer headerContactButton mHeaderBtn">
              <a href="tel:971 568 352 250" className="btn mBtn">
                <Image src="/telephone.svg" width={15} height={15} alt="heroContact" />
                +971 568 352 250
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
