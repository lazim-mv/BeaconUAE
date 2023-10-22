"use client";
import Image from "next/image";
import React, { useState } from "react";

function Faq() {
  const [faqData, setFaqData] = useState([
    {
      img: "01",
      heading: "What is Beacon and what services do you offer?",
      description:
      "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
      isAnswerVisible: true,
    },
    {
      img: "02",
      heading:
        "What sets Beacon apart from the other business incorporation and consulting firms?",
      description:
        "With significant expertise and a team with strong professional know-how, Beacon takes on projects with 100% confidence and a perfect blueprint of how to accomplish the business objectives. Through clear delivery models and customer-centric approaches, our efforts consider the business’s expectations with adherence to the global standards that make us stand out from the crowd.",
    },
    {
      img: "03",
      heading:
        "How can Beacon help my business with strategic planning and consultation?",
      description:
        "At Beacon, we make a precise understanding of the key areas where businesses can grow, thrive and create difference. We identify the major goals and issues that cater well to the organization and ensure alignment between the organization’s missions and plans. We also implement fine-tuning strategies to make an understanding and address existing barriers.",
    },
    {
      img: "04",
      heading:
        "Can Beacon help with financial auditing and reporting requirements?",
      description:
        "Yes. Beacon can help you with your needs of financial auditing and reporting. With a holistic approach toward scrutinizing the financial statements of the company and filing necessary regulations, we ensure the financial well-being of your business. Our financial reporting services help to report the income statements with summarized revenue and expenses for a complete analysis of the company’s financial status.",
    },
    {
      img: "05",
      heading: "Do you offer website development and maintenance services?",
      description:
        "Beacon can assist you with digital marketing and help you take your online presence to the next level. With digital marketing, we let you connect with the prospective and existing client base which is essential to improve the brand awareness and your business.",
    },
  ]);

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
            <h6 className="businessHeading">FAQ</h6>
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
                {/* <Image
                  src={data.img}
                  width={24}
                  height={24}
                  layout="responsive"
                  alt={`faqImageNumber ${index}`}
                /> */}
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
