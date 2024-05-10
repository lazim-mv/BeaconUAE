import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="contactMainContainer">
      <div className="contactContainer">
        <div className="contactHeadingContainer">
          <h2 className="contactHeading"> Have Questions? We Have Answers.</h2>
        </div>
        <div className="contactDescContainer">
          <p className="contactDesc">
            If you're ready to thrive in the UAE market, let's make it happen together. Reach out to <br />{" "}
            us today for specialized consultancy services tailored to your success.
          </p>
          <p className="mContactDesc">
            If you're ready to thrive in the UAE market, let's make it happen together. Reach out to
            us today for specialized consultancy services tailored to your success.
          </p>
        </div>
        <a href="/pages/Contact">
          <div className="hButtonContainer contactImageButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                Schedule a Call
                <div className="topVisibleArrow">
                  <Image
                    src="/whiteArrow.svg"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </div>
              <div className="bottomVisibleContainer btn">
                Schedule a Call
                <div className="bottomVisibleArrow">
                  <Image
                    src="/whiteArrow.svg"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
