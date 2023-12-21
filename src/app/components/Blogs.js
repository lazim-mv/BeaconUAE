"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {blogsData} from '../Contents/BlogsContent'

function Blogs() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Check screen size on the client side
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Initial check on component mount
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  

  const displayedBlogs = isMobileScreen ? blogsData.slice(0, 2) : blogsData;

  return (
    <div className="blogsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Blogs</h6>
        <h2 className="businessDesc">
          Read Through Our Perspectives & Latest Updates
        </h2>
      </div>

      <div className="rectangleContainer">
        {displayedBlogs.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div className="imgContainer">
              <Image src={data.img} width={350} height={250} alt="Image" />
            </div>
            <div className="blogBtnMainContainer">
              <div className="blogButtonContainer">
                <button className="blogBtn">{data.btnText}</button>
              </div>
              <button className="arrowButton">
                <Image
                  src="blackArrow.svg"
                  width={23}
                  height={23}
                  alt="Image"
                />
              </button>
            </div>
            <div className="servicesHeadingContainer">
              <h1 className="servicesHeading">{data.heading}</h1>
            </div>
            <div className="servicesDescContainer">
              <p className="servicesDesc">{data.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hButtonContainer servicesButton"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="visibleWrapperContainer">
          <div className="topVisibleContainer">
            <a href="/" className="btn">
              Explore More
              <div className="topVisibleArrow">
                <Image
                  src={imageSrc}
                  width={23}
                  height={23}
                  alt="heroContact"
                />
              </div>
            </a>
          </div>
          <div className="bottomVisibleContainer">
            <a href="/" className="btn">
              Explore More
              <div className="bottomVisibleArrow">
                <Image
                  src={imageSrc}
                  width={23}
                  height={23}
                  alt="heroContact"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
