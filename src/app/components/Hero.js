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
    "/clients/newBrands/1.png",
    "/clients/newBrands/2.png",
    "/clients/newBrands/3.png",
    "/clients/newBrands/4.png",
    "/clients/newBrands/5.png",
    "/clients/newBrands/6.png",
    "/clients/newBrands/1.png",
    "/clients/newBrands/2.png",
    "/clients/newBrands/3.png",
    "/clients/newBrands/4.png",
    "/clients/newBrands/5.png",
    "/clients/newBrands/6.png",
    "/clients/newBrands/1.png",
    "/clients/newBrands/2.png",
    "/clients/newBrands/3.png",
    "/clients/newBrands/4.png",
    "/clients/newBrands/5.png",
    "/clients/newBrands/6.png",
    "/clients/newBrands/1.png",
    "/clients/newBrands/2.png",
    "/clients/newBrands/3.png",
    "/clients/newBrands/4.png",
    "/clients/newBrands/5.png",
    "/clients/newBrands/6.png",
  ];

  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <div className="heroContent">
          <h1 className="heorHeading">
            Launch and Expand
            <br /> Your Business In UAE <br /> with our Expertise
          </h1>

          <div className="heroDescContainer">
            <p className="heroDesc">
              We help you fulfill your entrepreneurial journey and dream
              <br />
              business setup in UAE with support on tax and accounting to
              <br /> legal support and marketing.
            </p>
            <p className="mHeroDesc">
              We help you fulfill your entrepreneurial journey and dream
              business setup in UAE with support on tax and accounting to legal
              support and marketing.
            </p>
          </div>
          <a href="/pages/Services" className="heroAnchorButton">
            <div className="hButtonContainer heroButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Why Dubai
                  <div className="topVisibleArrow">
                    <Image
                      src="/blueArrow.svg"
                      width={21}
                      height={21}
                      alt="heroContact"
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Why Dubai
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/blueArrow.svg"
                      width={21}
                      height={21}
                      alt="heroContact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="heroImageContainer">
          <Image
            className="hImage"
            src={heroImg}
            alt="Asian Engineer"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
      </div>
      <div className="clientsImgContainer">
        <Brands
          imageSources={imageSources}
          initialAnimateValue="-160%"
          hoverDuration="180"
          duration="60"
        />
      </div>
    </div>
  );
}

export default Hero;
