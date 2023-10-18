import Image from "next/image";
import React from "react";

function WhyBeacon() {
  const beaconData = [
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup1.svg",
      heading: "Customer Centric",
      description:
        "We understand the customers and consider their expectations to align the services with their needs.",
    },
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup4.svg",
      heading: "global perspective",
      description:
        "Our team considers the business concerns and resolves them while addressing them on a global level.",
    },
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup6.svg",
      heading: "Collaborative Approach",
      description:
        "With collaboration, we equip businesses to face real-world challenges and retain relationships.",
    },
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup3.svg",
      heading: "Communication",
      description:
        "We adopt the process of sharing ideas and developing solutions based on the client's needs.",
    },
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup5.svg",
      heading: "Dedicated Teams",
      description:
        "Our team dedicatedly works on project realization right from the beginning to the final deployment.",
    },
    {
      img: "/NewSvgs/SVG1/hh/MaskGroup2.svg",
      heading: "Ease of Setup",
      description:
        "With us, your business setup is never going to be a hassle— it becomes as easy as a pie!",
    },
  ];

  return (
    <div className="whyBeaconContainer">
      <div className="whyBeaconContentsContainer">
        <div className="whyBeaconLeft">
          <h6 className="businessHeading">Why Beacon?</h6>
        </div>
        <div className="whyBeaconRight">
          <h2 className="whyBeaconHeading">
            Redefining Business With Endless Transformation Possibilities
          </h2>
          <p className="whyBeaconDesc">
            At Beacon Global, we&lsquo;re passionate about creating measurable
            impact in everything we do for you. Our DNA is the spirit that lets
            businesses grow and thrive. Established and specialized in providing
            Business consulting services across the Middle East, we work towards
            adding value to every client through our expertise.
          </p>
        </div>
      </div>

      <div className="whyBeaconImgContainer">
        <Image
          className="desktop"
          src="/NewSvgs/Backgrounds/bg6.png"
          layout="responsive"
          width={1049}
          height={434}
          alt="ImageWhyBeacon"
          quality={100}
          priority={true}
          unoptimized
        />
        <Image
          className="mobile"
          src="/NewSvgs/Backgrounds/bg3.png"
          layout="responsive"
          width={1049}
          height={434}
          alt="ImageWhyBeacon"
          quality={100}
          priority={true}
          unoptimized
        />
      </div>

      <div className="beaconMainContainer">
        {beaconData.map((data, index) => (
          <div className="beaconContainer" key={index}>
            <div className="beaconimgContainer">
              <Image
                className="becaonIconImg"
                src={data.img}
                width={60}
                height={40}
                alt="whyBeaconIcon"
                quality={100}
                priority={true}
                unoptimized
              />
            </div>
            <div className="beaconContentContainer">
              <div className="beaconHeadingContainer">
                <h1 className="beaconHeading">{data.heading}</h1>
              </div>
              <div className="beaconDescContainer">
                <p className="beaconDesc">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyBeacon;
