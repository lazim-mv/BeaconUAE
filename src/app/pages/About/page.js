"use client";

import styles from "../../Styles/aboutus.module.css";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { cvData, vissionMissionData, mainText, mainText_p } from "./AboutPageContent";
import WhatsAppChat from "@/app/components/WhatsAppChat";


const LoadingCircle = dynamic(() => import('@/app/components/LoadingCircle'));
const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Stats = dynamic(() => import('@/app/components/Stats'));
const Contact = dynamic(() => import('@/app/components/Contact'));
const Footer = dynamic(() => import('@/app/components/Footer'));

function About() {
  const [loaded, setLoaded] = useState(false);


  const handleImageLoad = () => {
    setLoaded(true);
  };

  const useBackgroundImage = true;

  return (
    <>
      <WhatsAppChat />
      <Header />
      <MobileHeader />
      <div className={styles.aboutUsMainContainer}>
        <h2 className="businessDesc">
          Legacy of Providing Invaluable
          <br /> Business Support
        </h2>
        <h2
          style={{ textAlign: "center" }}
          className={`${styles.mBusinessDesc1} mBusinessDesc`}
        >
          Legacy of Providing
          <br /> Invaluable Business Support
        </h2>
        <div className={styles.aboutUsHeroContainer}>
          <div>
            {!loaded && <LoadingCircle onLoadedImages={handleImageLoad} />}
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/AboutUsPage/aboutPage.webp"
              width={1212}
              height={600}
              layout="responsive"
              alt="aboutus1"
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
          <p className={styles.maintext}>
            {mainText}
          </p>
          <p className={styles.maintext_p}>
            {mainText_p}
          </p>
          <a href="/pages/Contact">
            <div className={`hButtonContainer ${styles.heroButton}`}>
              <div className="visibleWrapperContainer">
                <div className={`topVisibleContainer ${styles.btn}`}>
                  Contact Us
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
                <div className={`bottomVisibleContainer ${styles.btn}`}>
                  Contact Us
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

        <Stats useBackgroundImage={useBackgroundImage} isMainPage={false} />

        <div className={styles.aboutUsContainer2}>
          <h2 className="businessDesc">
            Magnify Your Business Goals With Beacon
          </h2>
          <h2 style={{ textAlign: "center" }} className={`${styles.mBusinessDesc1} mBusinessDesc`}>
            Magnify Your Business Goals<br /> With Beacon
          </h2>
          <div className={styles.mobilePaddingCard}>
            <div className={styles.cardMainContainer}>
              <div className={styles.cardContainer}>
                <div className={styles.ImageCon}>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup1.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup1.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup2.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup2.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup3.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup3.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.singleCard}>
                    <h1>Choice of Location</h1>
                    <p>
                      With benefits on ownership, time to establish and profit
                      repatriation, we offer the best business setup options in
                      the preferred locations across the UAE.
                    </p>
                  </div>
                  <div className={styles.singleCard}>
                    <h1>Reduced Tax</h1>
                    <p>
                      We provide support in leveraging taxation benefits to
                      promote your investment with liberal policies, which helps
                      you to establish a business in the UAE.
                    </p>
                  </div>
                  <div className={styles.singleCard}>
                    <h1>Advanced Digital Solutions</h1>
                    <p>
                      Moving towards the technology-driven future, we leverage
                      the best tech infrastructure the location offers to
                      increase opportunities through digital services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutUscontainer3}>
          <div className={styles.vissionMissionContainer}>
            {vissionMissionData.map((data, index) => (
              <div className={styles.vissionMissionCell} key={index}>
                {/* <div className={styles.topContainer}> */}
                <div
                  className={`${styles.container3Content} ${data.className}`}
                >
                  <h1>{data.heading}</h1>
                  <p>{data.description}</p>
                </div>
                <div className={styles.container3Img}>
                  <Image
                    quality={100}
                    priority={true}
                    unoptimized
                    src={data.img}
                    width={60}
                    height={60}
                    layout="responsive"
                    alt={`vissionMission ${index}`}
                  />
                  {/* </div> */}
                </div>
                <div className={styles.bottomContainer}></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.aboutUscontainer4}>
          <h2 className="businessDesc">Why Should You Work With Us?</h2>
          <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
            Why Should You Work <br /> With Us?
          </h2>
          <div className={styles.cvCard}>
            {cvData.map((data, index) => (
              <div className={styles.cvBackground} key={index}>
                <div className={styles.cvContent}>
                  <div className={styles.cvImg}>
                    <Image
                      src={data.img}
                      width={80}
                      height={80}
                      alt={`cv ${index}`}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.cvText}>
                    <h1>{data.heading}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contactCont}>
          <Contact />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
