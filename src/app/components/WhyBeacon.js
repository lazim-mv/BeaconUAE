import Image from "next/image";
import React from "react";
import { beaconData } from '../Contents/WhyBeaconContent';


function WhyBeacon() {


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
