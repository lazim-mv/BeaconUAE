import Image from "next/image";
import React from "react";
import { SectionDescription, SectionTitle } from "./ButtonComponent";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <Image
        src="/banner.jpg"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
        alt="banner"
      />
      <div className="bannerContent" style={{zIndex:10}}>
        <SectionTitle
          sectionText="A progressive hub for business"
          color="#fff"
          textAllign="center"
          padding="0 0 1.3227513227513228vw 0"
        />
        <h3>
          As a highly dynamic destination that has demonstrated its ability to
          react quickly to market demand, Dubai is uniquely positioned to adapt
          and develop its legacy as a city for the global community.
        </h3>
      </div>
      <div style={{position:"absolute",backgroundColor:"black",height:"100%",width:"100%",top:0 ,opacity:0.5,zIndex:0}}/>
    </div>
  );
};

export default Banner;
