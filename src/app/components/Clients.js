"use client";
import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import Image from "next/image";
import Stats from "./Stats";
import Brands from "./Brands";

function Clients() {
  const testimonialData = [
    {
      message:
        "“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”",
      name: "Usman Tariq",
      designation: "Riyadh, KSA",
      img: "/profilePic3.webp",
    },
    {
      message:
        "“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”",
      name: "Hassan",
      designation: "Jeddah, KSA",
      img: "/profilePic4.webp",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentCardIndex);
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
    console.log(currentCardIndex);
  };

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobileScreen]);

  const imageSources = [
    "/clients/brands/webp/logo1.webp",
    "/clients/brands/webp/logo2.webp",
    "/clients/brands/webp/logo3.webp",
    "/clients/brands/webp/logo4.webp",
    "/clients/brands/webp/logo5.webp",
    "/clients/brands/webp/logo6.webp",
    "/clients/brands/webp/logo9.webp",
    "/clients/brands/webp/logo10.webp",
    "/clients/brands/webp/logo11.webp",
    "/clients/brands/webp/logo12.webp",
    "/clients/brands/webp/logo13.webp",
    "/clients/brands/webp/logo15.webp",
    "/clients/brands/webp/logo17.webp",
    "/clients/brands/webp/logo18.webp",
    "/clients/brands/webp/logo20.webp",
    "/clients/brands/webp/logo22.webp",
    "/clients/brands/webp/shami.webp",
  ];

  const repeatedImageSources = Array.from({ length: 5 }, () => [
    ...imageSources,
  ]).flat();

  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">our CLIENTS</h6>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="180"
          duration="100"
        />
        ;
      </div>
      <div className="testimonialMainContainer">
        <div className="businessContentContainer">
          <h6 className="businessHeading">CLIENT REVIEWS</h6>
          <h2 className="businessDesc">
            We always go the extra mile
            <br /> for our clients
          </h2>
        </div>

        <div className="testimonialRightContainer">
          <button className="leftButton" onClick={showPreviousCard}>
            {"<"}
          </button>
          <div className="testimonialProfileContainer">
            {testimonialData.map((data, index) => (
              <div
                className={`testimonialProfile`}
                key={index}
                style={{
                  transform: isMobileScreen
                    ? `translateX(-${currentCardIndex * 110}%)`
                    : "none", // Set to 'none' or remove transform for desktop view
                }}
              >
                <div className="testimonialMessage">
                  <h3>{data.message}</h3>
                </div>
                <div className="testimonialCardBottom">
                  <div className="testiImg">
                    <Image
                      src={data.img}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={`person ${index}`}
                      quality={100}
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                  <div>
                    {/* Display current testimonial's profile */}
                    <p className="profileName">{data.name}</p>
                    <p className="profileDesignation">{data.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="rightButton" onClick={showNextCard}>
            {">"}
          </button>

          <div className="arrowButtonsTest">
            <button
              className="leftButton mLeftButton"
              onClick={showPreviousCard}
            >
              {"<"}
            </button>
            <button className="rightButton mRightButton" onClick={showNextCard}>
              {">"}
            </button>
          </div>
        </div>

        <hr />
        <Stats useBackgroundImage={false} isMainPage={false} />
      </div>
    </div>
  );
}

export default Clients;
