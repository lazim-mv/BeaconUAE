import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topContainer">
        <div className="footerLogoContainer">
          <Image
            src="/NewSvgs/Logos/beaconWhite.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="ImageFooter1"
            quality={100}
            loading="lazy"
            unoptimized
          />
        </div>
        <div className="footerContentContainer">
          <ul className="footercontent">
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/pages/About">
              <p>About Us</p>
            </a>
            <a href="/pages/Services">
              <p>Services</p>
            </a>
            <a href="/">
              <p>Blogs</p>
            </a>
            <a href="/pages/Contact">
              <p>Contact</p>
            </a>
          </ul>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="footerContactImgContainer">
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon-1.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div className="footerContactTextDetails footerContactTextDetailsEmail">
              <h1>Email us:</h1>
              <a
                href="mailto:admin@bmcglobal.co"
                style={{ textTransform: "none" }}
              >
                admin@bmcglobal.co
              </a>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div
              className="footerContactTextDetails"
              style={{ whiteSpace: "nowrap" }}
            >
              <h1>Call us on:</h1>
              <a href="tel:971568352250">
                <p>+971 568 352 250</p>
              </a>
            </div>
          </div>
          <div className="footerContactDetails">
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/NewSvgs/SVG3/hh/Icon-2.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
              <div className="footerContactTextDetails">
                <h1>Head Office:</h1>
                <p className="dAddress">
                  Office #39, 7th Floor, Dubai National Insurance
                  <br /> Building, Port Saeed Deira, Dubai, UAE
                </p>
                <p className="mAddress">
                  Office #39, 7th Floor, Dubai National Insurance Building, Port
                  Saeed Deira, Dubai, UAE
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="footerSocialContainer">
          <a href="">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-3.svg"
              width={46}
              height={46}
              alt="ImageFooter3"
            />
          </a>
          <a href="https://instagram.com/beaconglobal.co?igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-4.svg"
              width={46}
              height={46}
              alt="ImageFooter4"
            />
          </a>
          <a href="">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-5.svg"
              width={46}
              height={46}
              alt="ImageFooter5"
            />
          </a>
          <a href="https://www.linkedin.com/company/beacon-management-consultants/">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className="socialIcons"
              src="/NewSvgs/SVG3/hh/Icon-6.svg"
              width={46}
              height={46}
              alt="ImageFooter6"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className="footerCopyRightContainer">
        <p className="footerCopyRight">
          © 2023 by Beacon Management Consultants CO.LTD | All Right Reserved |
          Powered by{" "}
          <a
            href="https://procube.cx/"
            style={{ textDecoration: "underline", color: "#fff" }}
          >
            procube.cx
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
