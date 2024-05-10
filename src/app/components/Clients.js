"use client";
import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import Image from "next/image";
import Stats from "./Stats";
import Brands from "./Brands";

function Clients() {
  const testimonialData = [
    {
      message: "“Working with Beacon made setting up our business in Saudi Arabia hassle-free. Their comprehensive services covered everything from paperwork to logistics, ensuring a smooth and successful expansion.”",
      name: "Mohammed Al-Saud",
      designation: "Jeddah, KSA",
      img: "/profilePic3.webp",
    },
    {
      message:
        "“Working with Beacon felt like having an extended team member. Their transparency and unwavering commitment made the partnership seamless and productive.”",
      name: "Abdul Rasheed",
      designation: "Dammam, KSA",
      img: "/profilePic4.webp",
    },
    {
      message:
        "“Beacon's guidance and expertise have been instrumental in our business's growth and success. Their tailored solutions and dedicated support have exceeded our expectations.”",
      name: "Reem Abdullah",
      designation: "Riyadh, KSA",
      img: "/profilePic3.webp",
    },
    {
      message: "“Working with Beacon felt like having an extended team member. Their transparency and unwavering commitment made the partnership seamless and productive.",
      name: " Ahmed Al-Sayed",
      designation: "Dubai , UAE",
      img: "/profilePic4.webp",
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      isMobileScreen ? prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1 :
        prevIndex === testimonialData.length - 3 ? 0 : prevIndex + 1
    );
    console.log(currentCardIndex);
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      isMobileScreen ? prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1 :
        prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 1
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

  const repeatedImageSources = Array.from({ length: 10 }, () => [
    ...imageSources,
  ]).flat();

  React.useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    return () => {
    };
  }, []);

  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">our CLIENTS</h6>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        {/* <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="180"
          duration="100"
        /> */}
        <div className="scroller" data-direction="left" data-speed="fast">
          <div className="scroller__inner">
            {imageSources.map((img, index) => (
              <img key={index} src={img} alt="" className="logoClients" />
            ))}
          </div>
        </div>
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
                    ? `translateX(${(currentCardIndex * -110) + 110}%)`
                    : `translateX(-${currentCardIndex * 105}%)`,
                  transition: 'transform 0.5s ease',

                }}
              >
                <div className="testimonialMessage">
                  <h3>{data.message}</h3>
                </div>
                <div className="testimonialCardBottom">
                  {/* <div className="testiImg">
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
                  </div> */}
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
