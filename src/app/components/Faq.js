"use client";
import Image from "next/image";
import React, { useState } from "react";
import { faqContent } from "../Contents/FaqContent";

function Faq() {
  const [faqData, setFaqData] = useState(faqContent);

  const toggleAnswerVisibility = (index) => {
    // Create a copy of the FAQ data with isAnswerVisible updated
    const updatedFaqData = faqData.map((item, i) => ({
      ...item,
      isAnswerVisible: i === index ? !item.isAnswerVisible : false,
    }));

    setFaqData(updatedFaqData);
  };

  return (
    <div className="faqMainContainer">
      <div className="faqContainer">
        <div className="faqLeft">
          <div className="businessContentContainer">
            <h6 className="businessHeading faq">FAQ</h6>
            <h2 className="businessDesc">
              Frequently Asked <br /> Questions
            </h2>
          </div>
        </div>
        <div className="faqContentMainContainer">
          {faqData.map((data, index) => (
            <div
              className="faqRight"
              key={index}
              onClick={() => toggleAnswerVisibility(index)}
            >
              <div className="faqCountContainer">
                <h1 className="faqNumber">{data.img}</h1>
              </div>
              <div className="faqContentContainer">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="faqQuestionContainer"
                >
                  <div className="faqQuestion">
                    <h1>{data.heading}</h1>
                  </div>
                  <div
                    className={`faqAddIcon ${
                      data.isAnswerVisible ? "rotateIcon" : ""
                    }`}
                  >
                    <button>
                      <Image
                        src="/+.svg"
                        width={16}
                        height={16}
                        alt="ImageFaq"
                      />
                    </button>
                  </div>
                </div>
                {/* Always render the answer, but apply CSS class conditionally */}
                <div
                  className={`faqDesc ${data.isAnswerVisible ? "open" : ""}`}
                >
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
