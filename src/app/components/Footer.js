import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topContainer">
        <div className="footerLogoContainer">
          <Image
            quality={100}
            priority={true}
            unoptimized
            src="/NewSvgs/Logos/beaconWhite.svg"
            width={170}
            height={60}
            alt="ImageFooter1"
          />
        </div>
        <div className="footerContentContainer">
          <ul className="footercontent">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/pages/About">
              <li>About Us</li>
            </a>
            <a href="/pages/Services">
              <li>Services</li>
            </a>
            <a>
              <li>Blogs</li>
            </a>
            <a href="/pages/Contact">
              <li>Contact</li>
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
                href="mailto:info@bmcglobal.com"
                style={{ textTransform: "none" }}
              >
                info@bmcglobal.com
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
              <a href="tel:966 570 807 175">
                <p>
                  + 966 570 807 175
                  <br /> + 971 &nbsp;562 991 722
                </p>
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
                <p>
                  Building no. 4626, Hamza Shehatah St,
                  <br /> Al-Baghdadiyah Al-Gharbiyah, Jeddah 22235
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
          <a href="https://procube.cx/" style={{ textDecoration: "underline" }}>
            procube.cx
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
