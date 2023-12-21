"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jurisdictionData as pageData } from '../Contents/Jurisdiction';


function Jurisdiction() {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";



  useEffect(() => {
    const handleScroll = () => {
      const horizontalContainer = document.querySelector('.juriMainCardContainer');
      const scrollTop = 0;
      horizontalContainer.style.transform = `translateX(-${scrollTop}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="jurisdictionContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Jurisdiction</h6>
        <h2 className="businessDesc">Boundless Growth Wherever you Thrive</h2>
        <h2 className="mBusinessDesc">
          Boundless Growth Wherever <br /> you Thrive
        </h2>
      </div>

      <div className="juriMainCardContainer">
        {pageData.map((data, index) => (
          <div className="juriCardContainer" key={index}>
            <div className="juriCardImage">
              <Image
                src={data.img}
                layout='fill'
                objectFit="cover"
                objectPosition="center"
                alt={`juri ${index}`}
                quality={100}
                unoptimized
                loading="lazy"
              />
            </div>
            <div className="juriContent">
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

export default Jurisdiction;
