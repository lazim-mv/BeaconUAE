"use client";
import Image from "next/image";
import React, { useState } from "react";

function Places() {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const pageData = [
    {
      img: "/Jurisdiction/Image-1.svg",
      heading: "Abu Dhabi",
      description:
        "Explore the unparalleled ease of running your business in Abu Dhabi, the largest emirate in UAE, and make your business thrive amongst the best dynamic economy.",
    },
    {
      img: "/Jurisdiction/Image.svg",
      heading: "Dubai",
      description:
        "Establish your business in Dubai, the tax-favorable, business-friendly and highly desirable economically diverse destination that has ranked first in ease of doing business.",
    },
    {
      img: "/Jurisdiction/Image-2.svg",
      heading: "Sharjah",
      description:
        "Get immense advantage of seamless business setup in Sharjah, and experience the privilege of setting up business irrespective of mainland, offshore, or freezone preferences.",
    },
  ];

  return (
    <div
      className="jurisdictionContainer"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="businessContentContainer">
        <h6 className="businessHeading">Places</h6>
        <h2 className="businessDesc">
          Run Your Business At Coveted
          <br /> Business Landmarks
        </h2>
        <h2 className="mBusinessDesc">
          Run Your Business At Coveted
          <br /> Business Landmarks
        </h2>
      </div>

      <div className="juriMainCardContainer">
        {pageData.map((data, index) => (
          <div className="juriCardContainer" key={index}>
            <div className="juriCardImage placesImg">
              <Image
                src={data.img}
                width={500}
                height={500}
                alt={`juri ${index}`}
                layout="responsive"
                quality={100}
                priority={true}
                unoptimized
                objectFit="cover"
              />
            </div>
            <div style={{marginTop:"-10px"}} className="juriContent">
              <h1 style={{ color: "#fff" }} className="servicesHeading">
                {data.heading}
              </h1>
              <p className="juriDesc">{data.description}</p>
            </div>
          </div>
        ))}
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
  );
}

export default Places;