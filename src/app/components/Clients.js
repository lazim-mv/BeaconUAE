"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Stats from "./Stats";

function Clients() {
  const testimonialData = [
    {
      message:
        "“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”",
      name: "Omar Abdallah",
      designation: "Riyadh, KSA",
      img: "/profilePic3.jpg",
    },
    {
      message:
        "“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”",
      name: "Muhammed",
      designation: "Jeddah, KSA",
      img: "/profilePic4.jpg",
    },
    {
      message:
        "“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”",
      name: "Muhammed",
      designation: "Jeddah, KSA",
      img: "/profilePic4.jpg",
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

  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">our CLIENTS</h6>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        <ScrollingLogos />
        {/* <ScrollableRow /> */}
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
                      width={67}
                      height={60}
                      alt={`person ${index}`}
                      quality={100}
                      priority={true}
                      unoptimized
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

function ScrollingLogos() {
  const [isHovered, setIsHovered] = useState(false);
  const [animateValue, setAnimateValue] = useState("-200%");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Set the animate value based on screen width
      const newAnimateValue = screenWidth < 600 ? "-325%" : "-200%";

      // Update the animate value only if it has changed
      if (newAnimateValue !== animateValue) {
        setAnimateValue(newAnimateValue);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial animate value
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animateValue]);

  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 180, // Adjust the duration when hovering
        ease: "linear",
      },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 60, // Original duration
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    handleHoverEnd();
    console.log("use");
  }, []);

  return (
    <motion.div
      className="scrolling-logos"
      initial={{ x: "0%" }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo1.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo2.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo3.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo4.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo5.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo6.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo9.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo10.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo11.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo12.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo13.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo15.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo17.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo18.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo20.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo22.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo1.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo2.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo3.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo4.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo5.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo6.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo9.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo10.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo11.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo12.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo13.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo15.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo17.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo18.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo20.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo22.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo1.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo2.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo3.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo4.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo5.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo6.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo9.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo10.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo11.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo12.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo13.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo15.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo17.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo18.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo20.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
      <Image
        quality={100}
        priority={true}
        unoptimized
        src="/clients/brands/logo22.png"
        width={100}
        height={0}
        layout="responsive"
        alt="ImageClients"
        className="logoClients"
      />
    </motion.div>
  );
}
export { Clients, ScrollingLogos };
