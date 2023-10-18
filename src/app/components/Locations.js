"use client";
import Image from "next/image";
import React, { useState } from "react";

function Locations() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationImgContainer">
          <Image
            src="/location.svg"
            width={500}
            height={500}
            alt="ImageLocation"
            layout="responsive"
          />
        </div>
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Committed to Enhance
              <br /> Your Business Efficiency
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Beacon has laid its standards to streamline the business setup
              services in UAE, KSA, and India, with a plethora of specialised
              solutions to understand the legal procedures, documentation,
              financial authenticity, brand promotion, technological
              improvements, and other vital aspects toward establishing
              businesses in iconic landmarks. Equipped by a skilled team to
              simplify the process and adopt compliance with the UAE laws, we
              encourage and walk along to make your desire to start a business
              or expand your business in Dubai, UAE, a dream come true. UAE is
              well known for its world-class infrastructure, connectivity,
              workforce, technological abundance, innovation, business growth,
              and cosmopolitan culture. Earmarked as the leading business
              consultants in Saudi Arabia and global landmarks, we have also
              extended our roots to Dubai, UAE to help you future-proof your
              entrepreneurial journey with business-friendly policies at
              strategic locations. Get our assistance for 100% foreign
              ownership, amazing connectivity to leading markets, and
              cost-effective business setup in UAE.
            </p>
          </div>
          <a href="/pages/Services">
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
