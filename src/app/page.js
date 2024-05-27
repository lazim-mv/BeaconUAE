"use client";
import Services from "./components/Services";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoadingCircle from "./components/LoadingCircle";
import Head from "next/head";
import WhatsAppChat from "./components/WhatsAppChat";

const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Hero = dynamic(() => import("@/app/components/Hero"));
const Locations = dynamic(() => import("@/app/components/Locations"));
const Clients = dynamic(() => import("@/app/components/Clients"));
const Jurisdiction = dynamic(() => import("@/app/components/Jurisdiction"));
const Places = dynamic(() => import("@/app/components/Places"));
const Faq = dynamic(() => import("@/app/components/Faq"));
const Contact = dynamic(() => import("@/app/components/Contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Growth", "Success", "Strategy", "Expansion"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450);

    return () => clearInterval(interval);
  }, [textOptions.length]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <MobileHeader />
        <WhatsAppChat />
      <div id="white-screen">
        <LoadingCircle />
        <div className="changeTextContainer">
          <h1 className="spinnerText">Your Global Advisory Partner For</h1>
          <h1 className="changeText">
            <span className="spinnerText"> Business </span>{" "}
            {textOptions[textIndex]}
          </h1>
        </div>
      </div>
      <div className="mainContainer">
        <Hero />
        <Services />
        <Locations />
        <Jurisdiction />
        <Places />
        <Clients />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // Fetch data here (e.g., from an API)
//   const data = "Some data fetched at build time";

//   return {
//     props: {
//       data,
//     },
//   };
// }
