"use client";
import Image from "next/image";
import React from "react";
import Brands from "./Brands";
import heroImg from "../../../public/hero.webp";

function Hero() {
  const imageSources = [
    "/clients/newBrands/1.png",
    "/clients/newBrands/2.png",
    "/clients/newBrands/3.png",
    "/clients/newBrands/4.png",
    "/clients/newBrands/5.png",
    "/clients/newBrands/6.png",
  ];

  const repeatedImageSources = Array.from({ length: 20 }, () => [
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
  }, []);

  return (
    <>
      <div className="heroContainer">
        <Image
          className="hImage"
          src={heroImg}
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
        />
        <div className="heroContent">
          <h1 className="heroTitle">
            Launch and Expand Your Business In UAE with our Expertise
          </h1>
          <p className="heroDescription">
            We help you fulfill your entrepreneurial journey and dream business
            setup in UAE with support on tax and accounting to legal support and
            marketing.
          </p>
          <a href="/pages/WhyDubai">
            <div className="hButtonContainer heroButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Explore Dubai
                  <div className="topVisibleArrow">
                    <Image
                      className="heroArrows"
                      src="/whiteArrow.svg"
                      width={21}
                      height={18}
                      alt="heroContact"
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Explore Dubai
                  <div className="bottomVisibleArrow">
                    <Image
                      className="heroArrows"
                      src="/whiteArrow.svg"
                      width={21}
                      height={18}
                      alt="heroContact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="clientsImgContainer">
        {/* <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="400"
          duration="250"
        /> */}
        <div className="scroller" data-direction="left" data-speed="fast">
          <div className="scroller__inner">
            {repeatedImageSources.map((img, index) => (
              <img key={index} src={img} alt="" className="logoClients" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
