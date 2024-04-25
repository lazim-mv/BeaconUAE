
import { container3 } from "@/app/Contents/Data";
import dynamic from "next/dynamic";
import "@/app/index.css";

const Header = dynamic(() => import("@/app/components/Header/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader/MobileHeader"));
const Container3 = dynamic(() => import("@/app/components/Container3/Container3"));
const Container4 = dynamic(() => import("@/app/components/Container4/Container4"));
const Container5 = dynamic(() => import("@/app/components/Container5/Container5"));
const Hero = dynamic(() => import("@/app/components/Hero/Hero"));
const Banner = dynamic(() => import("@/app/components/Banner"));
const Container7 = dynamic(() => import("@/app/components/Container7/Container7"));
const ContactBanner = dynamic(() => import("@/app/components/ContactBanner/ContactBanner"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const Container8 = dynamic(() => import("@/app/components/Container8/Container8"));



export default function Home() {
  return (
    <main>
      <Header />
      <MobileHeader />
      <Hero />
      <Container8 />
      <Container3 data={container3[0]}/>
      <Container4 />
      <Container3 data={container3[1]} repeat={true}/>
      <Container5 />
      {/* <Container6 data={container6} /> */}
      <Banner />
      <Container7 />
      <ContactBanner />
      <Footer />
    </main>
  );
}
