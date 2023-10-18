"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import BusinessSetup from "./components/BusinessSetup";
import Services from "./components/Services";
import WhyBeacon from "./components/WhyBeacon";
import {Clients, ScrollingLogos} from "./components/Clients";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import Stats from "./components/Stats";
import { useEffect, useState } from "react";
import Head from "next/head";
import Jurisdiction from "./components/Jurisdiction";

export default function Home() {
  const [hideWhiteScreen, setHideWhiteScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 2500); // 1000 milliseconds = 1 second

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const useBackgroundImage = true;

  return (
    <>
      {/* <Head>
        <meta property="og:image" content="/linkImage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head> */}
      <Header />
      <MobileHeader />
      {!hideWhiteScreen && (
        <div
          id="white-screen"
          // style={{
          //   opacity: hideWhiteScreen ? 0 : 1,
          //   transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          // }}
        >
          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
        </div>
      )}
      <div className="mainContainer">
        <Hero />
        {/* <BusinessSetup /> */}
        <Services />
        <Locations />
        <Jurisdiction />
        {/* <WhyBeacon /> */}
        {/* <Stats useBackgroundImage={useBackgroundImage} isMainPage={true} /> */}
        {/* <Clients /> */}
        {/* <Blogs /> */}
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}


