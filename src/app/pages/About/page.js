"use client";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import styles from "../../Styles/aboutus.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Stats from "@/app/components/Stats";
import LoadingCircle from "@/app/components/LoadingCircle";

function About() {
  const cvData = [
    {
      img: "/NewSvgs/SVG7/Group1.svg",
      heading: "Agile team",
      description:
        "Fueled by a team of farsighted consultants, PRO specialists, operations staff, and an expert workforce, we offer custom business incorporation strategies to serve clients while streamlining the financial aspects.",
    },
    {
      img: "/NewSvgs/SVG7/Group2.svg",
      heading: "Proficiency",
      description:
        "With expertise and credibility, we confidently take up your business setup ideas, discuss your concerns, gather the requirements and address these well to sustain your position in the UAE market.",
    },
    {
      img: "/NewSvgs/SVG7/Group3.svg",
      heading: "Client Satisfaction",
      description:
        "We take pride in dedicatedly providing bespoke solutions to serve the clients’ needs. Our clients range from entrepreneurs of various sectors and industries, and we look forward to supporting you to trigger client satisfaction.",
    },
    {
      img: "/NewSvgs/SVG7/Group4.svg",
      heading: "End-to-end Consulting",
      description:
        "We understand the business jurisdictions UAE is segmented to, and comprehend the laws and regulations within each. With compliance, we offer risk mitigation strategies and valuable advice to entrepreneurs.",
    },
    {
      img: "/NewSvgs/SVG7/Group5.svg",
      heading: "Cost-Effective Evaluation",
      description:
        "If not directed properly, the cost of business setup in UAE could be massive. We closely evaluate the documentation, legal, business and operational aspects to help you with cost-effective business setup.",
    },
    {
      img: "/NewSvgs/SVG7/Group6.svg",
      heading: "Smooth Registration Support",
      description:
        "Being the leading business setup consultants, we keep your entire company formation process easy and effortless. Through our in-depth experience, we consider all necessary elements to simplify the business setup in UAE.",
    },
  ];

  const vissionMissionData = [
    {
      img: "/NewSvgs/SVG7/v1.webp",
      heading: "Our Mission",
      className: "c1",
      description:
        "To empower the founders and entrepreneurs with the best appropriate fiscal consultation and business setup services to thrive in the fast-developing business ecosystem. We strive to work with clients to let them make remarkable achievements in business with a key focus on offering holistic digital, financial, legal, operational and technological assistance.",
    },
    {
      img: "/NewSvgs/SVG7/v2.webp",
      heading: "Our Values",
      className: "c2",
      description:
        "Our efforts are infused with the core values of innovation, productivity, transparency, dedication and trust, and we feel confident to build relationships and keep delivering solutions to the businesses based on the client's expectations. We make your dream of business incorporation in UAE a success with our support at every step of your journey while holding to our values which helps us achieve an exceptional position in the market.",
    },
    {
      img: "/NewSvgs/SVG7/v3.webp",
      heading: "Our Vision",
      className: "c3",
      description:
        "To design and establish your business realm through an unparalleled assistance plan, triggering your efforts to strengthen your organisation’s processes, regulations and technologies that add necessary substance for your business, laying a benchmark of excellence. We keep an emphasis on evolving into the global market leader with an all-in-one business setup formula.",
    },
  ];
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const useBackgroundImage = true;

  return (
    <>
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
          <p>
            Beacon UAE is dedicated to realising your desire to set up business
            in the UAE through the best business consultancy services. With its
            remarkable operations across UAE, KSA and India, Beacon has been
            helping companies of all sizes to successfully incorporate their
            businesses in their dream locations. Backed by the goodwill of
            Beacon Global, our services guarantee to offer full-fledged business
            setup services that pave an endless path for futuristic business
            opportunities. Through economic and exceptional business formation
            and financial, legal, and technological support, we provide amazing
            mainland, free zone and offshore business setups making the process
            of business establishment seamless. Through strong project
            management skills, a comprehensive plan, and an in-depth
            understanding of legal proceedings, we ensure your business thrives
            in the UAE in the best possible way. We are also into providing a
            range of services that include marketing, accounting, audit and
            taxation, digital marketing and many more to make your transition
            into a successful business smoother.
          </p>
        </div>

        <Stats useBackgroundImage={useBackgroundImage} isMainPage={false} />

        <div className={styles.aboutUsContainer2}>
          <h2 className="businessDesc">
          Magnify Your Business Goals With Beacon
          </h2>
          <h2 style={{textAlign:"center"}} className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Magnify Your Business Goals<br/> With Beacon
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
                  <div>
                    <h1>Choice of Location</h1>
                    <p>
                      With benefits on ownership, time to establish and profit
                      repatriation, we offer the best business setup options in
                      the preferred locations across the UAE.
                    </p>
                  </div>
                  <div>
                    <h1>Reduced Tax</h1>
                    <p>
                      We provide support in leveraging taxation benefits to
                      promote your investment with liberal policies, which helps
                      you to establish a business in the UAE.
                    </p>
                  </div>
                  <div>
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
