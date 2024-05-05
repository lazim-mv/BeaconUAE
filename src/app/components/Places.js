"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { placesData as pageData } from '../Contents/PlacesContent';


function Places() {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";



  const placesContainerRef = useRef(null);

  return (
    <div className="placesContainer">
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
      <div className="scrollContainer">
        <div className="juriMainCardContainer" ref={placesContainerRef}>
          {pageData.map((data, index) => (
            <div className="cardNew" key={index}>
              <div className="content">
                <div className="frontNew">
                  <div className="juriContent ">
                    {/* <div className="circleNumber">
                      <h1>{data.Number}</h1>
                    </div> */}
                    <h1 style={{ color: "#fff" }} className="servicesHeading">
                      {data.heading}
                    </h1>
                    <p className="juriDesc">{data.description}</p>
                  </div>
                </div>
                <div className="backNew">
                  <div className=" placesCardImage">
                    <Image
                      src={data.img}
                      width={500}
                      height={500}
                      alt={`juri ${index}`}
                      layout="responsive"
                      quality={100}
                      unoptimized
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="backOverlay"></div>
              </div>
            </div>
          ))}
        </div>
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
