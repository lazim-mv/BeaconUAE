"use client";
import Image from "next/image";
import React, { useState } from "react";
import locationImg from '../../../public/location.webp'

function Locations() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationImgContainer">
          <Image
            src={locationImg}
            alt="ImageLocation"
            layout="responsive"
            priority={true}
            quality={100}
            unoptimized
          />
        </div>
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Committed to Enhance
              <br /> Your Business Efficiency
            </h2>
            <h2 className="locationHeading mlocationHeading">
              Committed to Enhance
              Your <br /> Business Efficiency
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Beacon has set high standards for streamlining business
              setup services across GCC. With specialized
              solutions covering legal procedures, documentation, financial
              authenticity, brand promotion, and technological improvements,
              we facilitate business establishment in iconic landmarks. Our
              skilled team simplifies processes and ensures compliance with UAE
              laws, supporting your dream of starting or expanding a business in
              Dubai. UAE offers world-class infrastructure, connectivity, workforce,
              innovation, and cosmopolitan culture. As leading business consultants
              in Saudi Arabia and beyond, we&apos;ve expanded to Dubai to future-proof
              your entrepreneurial journey with business-friendly policies. Benefit
              from 100% foreign ownership, excellent market connectivity, and
              cost-effective business setup assistance in UAE.
            </p>
          </div>
          <a className="locationButton" href="/pages/Services">
            <div
              className="hButtonContainer servicesButton"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Explore More
                  <div className="topVisibleArrow">
                    <Image
                      src={imageSrc}
                      width={23}
                      height={23}
                      alt="heroContact"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Explore More
                  <div className="bottomVisibleArrow">
                    <Image
                      src={imageSrc}
                      width={23}
                      height={23}
                      alt="heroContact"
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Locations;
