"use client";
import React, { useState } from "react";
import styles from "../../Styles/servicesPage.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import LoadingCircle from "@/app/components/LoadingCircle";

function Services() {
  const servicePageData = [
    {
      img: "/NewSvgs/SVG2/hh/Group1.svg",
      heading: "Business Incorporation",
      description:
        "Get company incorporation assistance and compliance support right after the registration process. Tell us your requirements and let us drive your investment and growth with business incorporation services",
      details: [
        "GCC National Company",
        "Limited Liability Company",
        "Multi Country Business Setup",
        "Branch of Foreign Company",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group6.svg",
      heading: "Business Consultation",
      description:
        "Let us discuss your business requirements, augment your business processes and transform your brand with innovation, leadership, and technology.",
      details: [
        "Government Relation Management",
        "Employee Work Permit & Visa Assistance",
        "ISO Certifications",
        "Licence Amendment",
        "Company Liquidation",
        "Business Transfer - Merging",
        "Trademark Registration",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group2.svg",
      heading: "Financial & Accounting",
      description:
        "With regular monitoring of accounting, financial reporting and related business activities, we analyze the financial processes essential to your business.",
      details: [
        "Financial Statement Preparation",
        "Tax Planning & Preparation",
        "Budgeting & Forecasting",
        "Financial Planning",
        "Investment Management",
        "Business Valuation",
        "Corporate Finance & Payroll Services",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group4.svg",
      heading: "Audit & Taxation",
      description:
        "Through end-to-end monitoring and review of the crucial tax matters of the business, our panel of experts are adept at maintaining accuracy in reports.",
      details: [
        "Internal Audits",
        "Compliance Audits",
        "VAT Advisory Services",
        "Income Tax Advisory Services",
        "Social Responsibility Audits",
        "Tax Risk Management Services",
        "Operational and System Audits",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group3.svg",
      heading: "Technology Solutions",
      description:
        "We combine technological expertise with business experience, thereby making prompt resolutions to address your technical needs that propel your business.s",
      details: [
        "Digital Strategy",
        "Designing",
        "Web Development",
        "Ecommerce Development",
        "App Development",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group5.svg",
      heading: "Digital Marketing",
      description:
        "Let us take your brand to new heights with the best marketing activities and help you build a positive impression on the customers for better brand outreach.",
      details: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (Google Ads)",
        "Social Media Marketing (Meta Ads)",
        "Social Media Management",
      ],
    },
  ];

  const sellingCardData = [
    {
      img: "/NewSvgs/SVG7/G1.svg",
      heading: "Optimising Investment Budgets",
      description:
        "Make wise investments with our customized packages to suit what your business demands. We help you to fine-tune the budgets based on the timeframe and the nature of the business.",
    },
    {
      img: "/NewSvgs/SVG7/G2.svg",
      heading: "In-depth Field Expertise",
      description:
        "Get benefits from our global expertise and the vast knowledge of our team to drive your business quest in the right direction. Make your business decisions the best with our specialised services.",
    },
    {
      img: "/NewSvgs/SVG7/G3.svg",
      heading: "Transparency & Privacy",
      description:
        "We follow 100% transparency and privacy on all business processes and provide business consultation with a set of strategies aligned to your business goals.",
    },
    {
      img: "/NewSvgs/SVG7/G4.svg",
      heading: "Dedicated Team",
      description:
        "Don’t worry about who can address all your needs in time! Our dedicated team is always at your reach to support your requirements and concerns at the right time without delay.",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.servicePageMainContainer}>
        <h2 className="businessDesc">
          Your Business Establishment
          <br /> Done Right
        </h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Your Business Establishment
          <br /> Done Right
        </h2>
        <div
          className={`${styles.servicePageMCardMainContainer} cardMainContainer`}
        >
          {servicePageData.map((data, index) => (
            <div
              className={`${styles.cardContainer} cardContainer`}
              key={index}
            >
              <div className={`${styles.imgContainer} imgContainer`}>
                <Image
                  src={data.img}
                  width={70}
                  height={70}
                  alt="ImageService"
                  loading="lazy"
                />
              </div>
              <div className="servicesHeadingContainer">
                <h1 className="servicesHeading">{data.heading}</h1>
              </div>
              <div
                className={`${styles.servicesDescContainer} servicesDescContainer`}
              >
                <p className="servicesDesc">{data.description}</p>
              </div>
              <div
                className={`${styles.sPagecardContainerOverlay} cardContainerOverlay`}
              >
                <h2>{data.heading}</h2>
                <div className={styles.overLayDesc}>
                  <p>{data.details[0]}</p>
                  <p>{data.details[1]}</p>
                  <p>{data.details[2]}</p>
                  <p>{data.details[3]}</p>
                  <p>{data.details[4]}</p>
                  <p>{data.details[5]}</p>
                  <p>{data.details[6]}</p>
                  <p>{data.details[7]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.servicesPageContainer2}>
          <div className={styles.container2Contents}>
            <h1 className="businessDesc">
              Your Business Milestone Is
              <br /> Under Progress
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Your Business Milestone Is
              <br /> Under Progress
            </h1>
            <p>
              Starting or developing a business in the UAE involves many steps—
              this includes visas, sponsorship, trade licenses, financial
              activities and many must-haves that you require to fund and manage
              your business. With comprehensive support and collaboration, we
              handle every aspect of your business without a hitch. You can
              trust us to manage every nook and corner of your business, no
              matter how critical or mundane it would be.
            </p>
          </div>
          <div className={styles.servicePageImageContainer2}>
            {!loaded && <LoadingCircle onLoadedImages={handleImageLoad} />}
            <Image
              src="/ServicesPage/servicesPage7.webp"
              width={576}
              height={540}
              layout="responsive"
              alt="serviceImg1"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>

        <div className={styles.container3}>
          <h1 className="businessDesc">
            How Beacon Lets Your Business Thrive?
          </h1>
          <h1
            style={{ textAlign: "center" }}
            className={`${styles.servicePagecontainer2MobileHeading}`}
          >
            How Beacon Lets Your
            <br /> Business Thrive?
          </h1>
          <div className={styles.container3SellingCard}>
            {sellingCardData.map((data, index) => (
              <div className={styles.sellingCards} key={index}>
                <div
                  className={`${styles.sellingImageContainer} ${
                    index === 2 ? styles.selected : ""
                  }`}
                  key={index}
                >
                  <Image
                    src={data.img}
                    width={80}
                    height={80}
                    layout="responsive"
                    alt="serviceImg2"
                  />
                </div>
                <div className={styles.container3Contents}>
                  <h1 className="servicesHeading">{data.heading}</h1>
                  <p className="servicesDesc">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container4}>
          <div className={styles.background}></div>
          <div className={styles.container4ImgContainer}>
            {!loaded && <LoadingCircle onLoadedImages={handleImageLoad} />}
            <Image
              src="/ServicesPage/servicesPage1.webp"
              width={500}
              height={500}
              layout="responsive"
              alt="aboutus2"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.container4Contents}>
            <h1 className="businessDesc">
              Cracking the Puzzle with the
              <br /> Right Business Strategies
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Cracking the Puzzle with
              <br /> the Right Business Strategies
            </h1>
            <p className="servicesDesc">
              With expertise in serving the businesses over years, we have been
              making efficient and compliant business strategies for
              entrepreneurs all over the UAE. Being the foremost business
              management consultant and the pioneered business setup provider
              across the UAE, our company specialises in offering bespoke
              solutions in business incorporation, Immigration Support,
              Corporate Banking, technological solutions, Corporate Finance and
              accounting, Tax Compliance, audit and digital marketing services.
              Let&lsquo;s get in touch today to make a customised proposal for
              your business that stays close to your business goals!
            </p>
          </div>
        </div>
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Services;
