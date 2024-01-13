"use client";
import Image from "next/image";
import React from "react";
import Brands from "./Brands";
import heroImg from "../../../public/hero.png";

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
          <a href="/pages/Contact">
            <div className="hButtonContainer heroButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Let&apos;s Talk
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
                  Let&apos;s Talk
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
        <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="400"
          duration="250"
        />
      </div>
    </>
  );
}

export default Hero;
