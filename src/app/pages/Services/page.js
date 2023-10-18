"use client";
import React, { useState } from "react";
import styles from "../../Styles/servicesPage.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import { LeftArrowSvg, RightArrowSvg } from "../../components/ButtonSvg";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

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
        "Our business consultation services augment your business requirements through essential aspects of businesses like people, processes, technology, and related operations.",
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
        "Through the regular management of financial reports, accounting, and related activities of the business, we are involved in the analysis and reporting of financial processes.",
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
        "We engage in the routine monitoring, review, and report of the significant tax matters that impact your business with the panel of our audit and tax experts.",
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
        "Along with the business experience, we infuse technology into the business processes to address your specific technical needs that reimagine business models.",
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
        "Hand over all your digital marketing to-do tasks to our experts and watch through the growth plateau with the finest services that scale your brand outreach.",
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
      heading: "Expert advice",
      description:
        "A business should follow strict compliance with the local regulations and laws. With expert advice, we guide you through aspects like licensing, tax regulations, business models, etc. to make informed decisions.",
    },
    {
      img: "/NewSvgs/SVG7/G2.svg",
      heading: "Ease of Access",
      description:
        "To grow amidst the thriving business community, having a powerful network is the key. We help you grow networks and connections that can contribute greatly to your business and help you establish a strong business presence.",
    },
    {
      img: "/NewSvgs/SVG7/G3.svg",
      heading: "Save on Costs",
      description:
        "With our team, you can relieve yourself from the time-consuming processes such as hectic paperwork, research, meetings or legal challenges, while we manage everything for you, thereby saving on costs and time.",
    },
    {
      img: "/NewSvgs/SVG7/G4.svg",
      heading: "In-depth Market research",
      description:
        "By leveraging the expertise of business consultants, you can get valuable market insights to back your business decision-making. Our comprehensive market research helps you make the most out of your venture.",
    },
  ];

  const testimonials = [
    {
      message:
        "Beacon has been with us throughout the phase of integrating and adapting business to the dynamic marketplace, with end-to-end business consultation services.",
      name: "Omar Abdallah",
      designation: "Riyadh, KSA",
      img: "/profilePic3.jpg",
    },
    {
      message:
        "While partnering with Beacon, we never felt them as the business consultants, but as a part of our team with transparency and commitment at its best.",
      name: "Muhammed",
      designation: "Jeddah, KSA",
      img: "/profilePic4.jpg",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

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
          Everything Your Business Needs to Thrive
        </h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Everything Your Business Needs to Thrive
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
          <div className={styles.servicePageImageContainer2}>
            {!loaded && (
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            )}
            <Image
              src="/ServicesPage/servicesPage7.svg"
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
          <div className={styles.container2Contents}>
            <h1 className="businessDesc">
              Strategic Excellence to <br /> Scale Your Business
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Strategic Excellence to <br /> Scale Your Business
            </h1>
            <p>
              Being your premium partner for all your business requirements, we
              offer a myriad of professional solutions woven to suit your
              expectations. Whether you are an entrepreneur searching for
              assistance to set up a business in the UAE, India, or KSA, or need
              help with financial, technological, digital transformation, or
              business consulting solutions, we&lsquo;re here to resolve them.
              Our experts understand the local and global market, and the
              regulations to ensure your business can thrive well in the dynamic
              world through comprehensive services to drive business success.
            </p>
          </div>
        </div>

        <div className={styles.container3}>
          <h1 className="businessDesc">Why Choose Us?</h1>
          <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
            Why Choose Us?
          </h1>
          <div className={styles.container3SellingCard}>
            {sellingCardData.map((data, index) => (
              <div className={styles.sellingCards} key={index}>
                <div className={styles.sellingImageContainer} key={index}>
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
          <div className={styles.container4Contents}>
            <h1 className="businessDesc">
              Let&lsquo;s Unlock Your <br /> Business Formula
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Let&lsquo;s Unlock Your <br /> Business Formula
            </h1>
            <p className="servicesDesc">
              A reliable business consulting solutions provider augments your
              needs to set up your business as you prefer. We help you with
              everything that ranges from how to start a business to
              establishing the roots for a firm brand presence. Through
              end-to-end strategies and consulting solutions, we give businesses
              the methods to manage any technological, financial, legal,
              digital, and operational processes to let you scale your business.
              Our advisory and consulting expertise helps you to quickly adapt
              to the changes in the dynamic landscape and gain sustainable
              business advantage.
            </p>
          </div>
          <div className={styles.container4ImgContainer}>
            {!loaded && (
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            )}
            <Image
              src="/NewSvgs/Backgrounds/abBg5.svg"
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
        </div>
        <div className={styles.marginContainer}>
          <div
            className={`${styles.testimonialMainContainerServicePage} testimonialMainContainer`}
          >
            <div
              className={`${styles.testimonialLeftContainer} testimonialLeftContainer`}
            >
              <h2 className="testimonialHeading">
                What our clients
                <br />
                say about us
              </h2>
              <h2 className={`${styles.mTestimonialHeading}`}>
                What our clients say <br /> about us
              </h2>
              <p className="testimonialDesc">
                Let&lsquo;s hear from our clients, the core of whatever we
                commit.
              </p>
            </div>
            <div className="testimonialRightContainer">
              <div className="testimonialMessage">
                <h3>&quot;{currentTestimonial.message}&quot;</h3>
              </div>
              <div className="testimonialImageButtonContainer">
                <div className="testimonialProfile">
                  <Image
                    src={currentTestimonial.img}
                    width={50}
                    height={50}
                    alt="person"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* Display current testimonial's profile */}
                    <p className="profileName">{currentTestimonial.name}</p>
                    <p className="profileDesignation">
                      {currentTestimonial.designation}
                    </p>
                  </div>
                </div>
                <div className="testimonialButtonContainer">
                  <button className="leftButton" onClick={previousTestimonial}>
                    {"<"}
                  </button>
                  <button className="rightButton" onClick={nextTestimonial}>
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Services;
